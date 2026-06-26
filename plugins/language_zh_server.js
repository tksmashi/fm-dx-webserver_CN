/**
 * FM-DX Webserver - Chinese Language Pack (中文语言包)
 * Server-side plugin v1.0.0
 * 
 * 功能：
 * - 注册为 FM-DX Webserver 插件
 * - 检测客户端 Accept-Language 头
 * - 通过插件 WebSocket 事件广播语言偏好
 */

// 获取插件 API
var pluginsApi;
try {
    pluginsApi = require('../server/plugins_api');
} catch (e) {
    // plugins_api 可能在不同路径
    try {
        pluginsApi = require('../../server/plugins_api');
    } catch (e2) {
        console.error('[Language ZH] Failed to load plugins_api:', e2.message);
        return;
    }
}

// 注册服务器上下文
var serverContext = {
    wss: null,
    pluginsWss: null,
    httpServer: null,
    serverConfig: null
};

// 注册事件处理器
pluginsApi.registerServerContext(serverContext);

// 监听 HTTP 请求以检测 Accept-Language
if (serverContext.httpServer) {
    serverContext.httpServer.on('request', function(req, res) {
        var acceptLanguage = req.headers['accept-language'] || '';
        
        // 检测中文语言偏好
        if (acceptLanguage.indexOf('zh') !== -1 || acceptLanguage.indexOf('zh-CN') !== -1) {
            // 仅在首次检测到时记录
            if (!req._languageDetected) {
                req._languageDetected = true;
                
                // 通过插件事件广播（可选，未来用于语言切换）
                pluginsApi.emitPluginEvent('language:detected', {
                    lang: 'zh-CN',
                    clientIp: req.ip || req.connection.remoteAddress
                }, { broadcast: false });
            }
        }
    });
}

console.log('[Language ZH] Server-side plugin loaded. Listening for Accept-Language headers.');
