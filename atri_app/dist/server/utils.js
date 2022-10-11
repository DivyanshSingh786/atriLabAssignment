"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReloadMessage = exports.createWebSocketServer = exports.getServerInfo = exports.findNearestNodeModulesDirectory = exports.getIndexHtmlContent = exports.isDevelopment = exports.getPageFromCache = exports.storePageInCache = exports.createIfNotExistLocalCache = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var ws_1 = require("ws");
// create local cache directory if not already created
var localCache = path_1.default.resolve(__dirname, ".cache");
var pagesCache = path_1.default.resolve(localCache, "pages");
var gitIgnoreLocalCache = path_1.default.resolve(localCache, ".gitignore");
function createIfNotExistLocalCache() {
    if (!fs_1.default.existsSync(localCache)) {
        fs_1.default.mkdirSync(localCache, { recursive: true });
    }
    if (!fs_1.default.existsSync(gitIgnoreLocalCache)) {
        fs_1.default.writeFileSync(gitIgnoreLocalCache, "*");
    }
}
exports.createIfNotExistLocalCache = createIfNotExistLocalCache;
function getPageDirPath(url) {
    return path_1.default.resolve(pagesCache, url.slice(1));
}
function getPageFilePath(url) {
    return path_1.default.resolve(getPageDirPath(url), "index.html");
}
function storePageInCache(url, html) {
    var pageDirPath = getPageDirPath(url);
    var pageFilePath = getPageFilePath(url);
    if (!fs_1.default.existsSync(pageDirPath)) {
        fs_1.default.mkdirSync(pageDirPath, { recursive: true });
    }
    fs_1.default.writeFileSync(pageFilePath, html);
}
exports.storePageInCache = storePageInCache;
function getPageFromCache(url) {
    var pageFilePath = getPageFilePath(url);
    if (!fs_1.default.existsSync(pageFilePath)) {
        return null;
    }
    return fs_1.default.readFileSync(pageFilePath).toString();
}
exports.getPageFromCache = getPageFromCache;
var indexHtmlContent = "";
exports.isDevelopment = process.argv.includes("--dev");
function getIndexHtmlContent(appHtml) {
    if (indexHtmlContent === "" || exports.isDevelopment) {
        if (fs_1.default.existsSync(appHtml)) {
            indexHtmlContent = fs_1.default.readFileSync(appHtml).toString();
        }
        else {
            console.log("ERROR: app's index.html file is missing");
        }
    }
    return indexHtmlContent;
}
exports.getIndexHtmlContent = getIndexHtmlContent;
function findNearestNodeModulesDirectory(startDir, prevDir) {
    if (fs_1.default.existsSync(path_1.default.resolve(startDir, "node_modules"))) {
        return path_1.default.resolve(startDir, "node_modules");
    }
    // We are the root directory
    if (startDir === prevDir) {
        throw Error("Could not find node_modules directory");
    }
    return findNearestNodeModulesDirectory(path_1.default.resolve(startDir, ".."), startDir);
}
exports.findNearestNodeModulesDirectory = findNearestNodeModulesDirectory;
function getServerInfo(startDir) {
    var nodeModulesPath = findNearestNodeModulesDirectory(startDir, null);
    var serverInfoPath = path_1.default.resolve(nodeModulesPath, "..", "atri-server-info.json");
    var serverInfo = JSON.parse(fs_1.default.readFileSync(serverInfoPath).toString());
    return {
        port: parseInt(process.env["PORT"] || "") || serverInfo["port"],
        pythonPort: serverInfo["pythonPort"],
        publicDir: serverInfo["publicDir"],
        pages: serverInfo["pages"],
        publicUrlAssetMap: serverInfo["publicUrlAssetMap"],
        controllerHost: process.env["ATRI_CONTROLLER_HOST"],
    };
}
exports.getServerInfo = getServerInfo;
var wsSockets = [];
function createWebSocketServer(server) {
    var wsServer = new ws_1.WebSocketServer({ server: server });
    wsServer.on("connection", function (ws) {
        wsSockets.push(ws);
        ws.on("close", function () {
            var index = wsSockets.findIndex(function (curr) { return curr === ws; });
            if (index >= 0) {
                wsSockets.splice(index, 1);
            }
        });
    });
}
exports.createWebSocketServer = createWebSocketServer;
function sendReloadMessage() {
    wsSockets.forEach(function (ws) {
        ws.send("reload", function (err) {
            if (err) {
                console.log("failed to send reload message\n", err);
            }
        });
    });
}
exports.sendReloadMessage = sendReloadMessage;
