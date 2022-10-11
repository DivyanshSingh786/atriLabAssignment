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
exports.forwardGetPageRequest = void 0;
var http_1 = __importDefault(require("http"));
function forwardGetPageRequest(params) {
    return new Promise(function (res, rej) {
        var pageState = params.pageState, pageRoute = params.pageRoute, controllerHostname = params.controllerHostname, controllerPort = params.controllerPort, req = params.req, query = params.query;
        var payload = JSON.stringify({
            route: pageRoute,
            state: pageState,
            query: query,
        });
        var forward_req = http_1.default.request({
            hostname: controllerHostname,
            port: controllerPort,
            path: "/handle-page-request",
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
                    var newPageState = JSON.parse(data);
                    res({
                        pageState: newPageState,
                        headers: forward_res.headers,
                        statusCode: forward_res.statusCode || 200,
                    });
                }
                catch (err) {
                    console.log("Unexpected Forward Response\n", err);
                    rej(501);
                }
            });
        });
        forward_req.on("error", function (e) {
            console.error("problem with request: ".concat(e.message));
            rej(501);
        });
        forward_req.write(payload);
        forward_req.end();
    });
}
exports.forwardGetPageRequest = forwardGetPageRequest;
