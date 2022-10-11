"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
var http_proxy_middleware_1 = require("http-proxy-middleware");
var chokidar_1 = require("chokidar");
var forwarder_1 = require("./forwarder");
// constants needed externally
var serverInfo = (0, utils_1.getServerInfo)(__dirname);
var nodeModulesPath = (0, utils_1.findNearestNodeModulesDirectory)(__dirname, null);
var watcher = (0, chokidar_1.watch)([
    path_1.default.resolve(nodeModulesPath, "..", "atri-server-info.json"),
]);
watcher.on("change", function () {
    var pages = (0, utils_1.getServerInfo)(__dirname).pages;
    serverInfo.pages = pages;
});
var appDistHtml = path_1.default.resolve(serverInfo.publicDir, "index.html");
var _a = (serverInfo.controllerHost || "").split(":"), controllerHostnameRaw = _a[0], controllerPortRaw = _a[1];
var controllerHostname = controllerHostnameRaw || "0.0.0.0";
var controllerPort = controllerPortRaw
    ? parseInt(controllerPortRaw)
    : serverInfo.pythonPort;
(0, utils_1.createIfNotExistLocalCache)();
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
(0, utils_1.createWebSocketServer)(server);
app.use(function (req, res, next) {
    console.log("request received", req.originalUrl, req.path);
    if (req.method === "GET" && serverInfo.pages[req.path]) {
        if (!utils_1.isDevelopment) {
            var finalTextFromCache = (0, utils_1.getPageFromCache)(req.path);
            if (finalTextFromCache) {
                res.send(finalTextFromCache);
                return;
            }
        }
        // read again App.jsx for dev server
        var getAppTextPath = path_1.default.resolve(__dirname, "..", "app-node", "static", "js", "app.bundle.js");
        delete require.cache[getAppTextPath];
        var getAppText = require(getAppTextPath)["getAppText"]["getAppText"];
        var appHtmlContent = (0, utils_1.getIndexHtmlContent)(appDistHtml);
        var finalText = getAppText(req.path, appHtmlContent);
        res.send(finalText);
        (0, utils_1.storePageInCache)(req.path, finalText);
    }
    else {
        next();
    }
});
app.post("/event-handler", express_1.default.json({ limit: "50mb" }), function (req, res) {
    var pageRoute = req.body["pageRoute"];
    var pageState = req.body["pageState"];
    var alias = req.body["alias"];
    var callbackName = req.body["callbackName"];
    var eventData = req.body["eventData"];
    if (typeof pageRoute !== "string" ||
        typeof pageState !== "object" ||
        typeof alias !== "string" ||
        typeof callbackName !== "string") {
        res.status(400).send();
        return;
    }
    // TODO: update pageState if success python call otherwise 501
    var payload = JSON.stringify({
        route: pageRoute,
        state: pageState,
        alias: alias,
        callbackName: callbackName,
        eventData: eventData,
    });
    var forward_req = http_1.default.request({
        hostname: controllerHostname,
        port: controllerPort,
        path: "/event",
        method: "POST",
        headers: __assign(__assign({}, req.headers), { "Content-Type": "application/json", "Content-Length": payload.length, "Transfer-Encoding": "chunked" }),
    }, function (forward_res) {
        forward_res.setEncoding("utf8");
        var data = "";
        forward_res.on("data", function (chunk) {
            data = data + chunk;
        });
        forward_res.on("end", function () {
            try {
                // copy headers
                Object.keys(forward_res.headers).forEach(function (key) {
                    res.setHeader(key, forward_res.headers[key]);
                });
                var newPageState = JSON.parse(data);
                // copy status code
                var statusCode = forward_res.statusCode || 200;
                res.status(statusCode).send({ pageState: newPageState });
            }
            catch (err) {
                console.log("Unexpected Forward Response\n", err);
                res.status(501).send();
            }
        });
    });
    forward_req.on("error", function (e) {
        console.error("problem with request: ".concat(e.message));
        res.status(501).send();
    });
    forward_req.write(payload);
    forward_req.end();
});
app.post("/handle-page-request", express_1.default.json({ limit: "50mb" }), function (req, res) {
    var pageRoute = req.body["pageRoute"];
    var query = req.body["query"];
    var useStorePath = path_1.default.resolve(__dirname, "..", "app-node", "static", "js", "serverSide.bundle.js");
    delete require.cache[useStorePath];
    var pageState = require(useStorePath)["getAppText"]["default"]["getState"]()[serverInfo.pages[pageRoute].name];
    (0, forwarder_1.forwardGetPageRequest)({
        pageRoute: pageRoute,
        query: query,
        pageState: pageState,
        controllerHostname: controllerHostname,
        controllerPort: controllerPort,
        req: req,
    })
        .then(function (val) {
        // copy headers
        Object.keys(val.headers).forEach(function (key) {
            res.setHeader(key, val.headers[key]);
        });
        // copy status code
        res
            .status(val.statusCode)
            .send(__assign(__assign({}, val), { pageName: serverInfo.pages[pageRoute].name }));
    })
        .catch(function (err) {
        console.log("Forward failed", err);
        res.status(err).send();
    });
});
app.use("/event-in-form-handler", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://".concat(controllerHostname, ":").concat(controllerPort),
}));
app.post("/reload-all-dev-sockets", function (_req, res) {
    console.log("received request to reload all sockets");
    (0, utils_1.sendReloadMessage)();
    res.send();
});
Object.keys(serverInfo.publicUrlAssetMap).forEach(function (url) {
    app.use(url, express_1.default.static(serverInfo.publicUrlAssetMap[url]));
});
app.use(express_1.default.static(serverInfo.publicDir));
server.listen(serverInfo.port, function () {
    var address = server.address();
    if (typeof address === "object" && address !== null) {
        var port = address.port;
        var ip = address.address;
        console.log("[ATRI_SERVER] listening on http://".concat(ip, ":").concat(port));
    }
    else if (typeof address === "string") {
        console.log("[ATRI_SERVER] listening on http://".concat(address));
    }
    else {
        console.log("[ATRI_SERVER] cannot listen on ".concat(serverInfo.port));
    }
});
