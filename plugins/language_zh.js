/**
 * FM-DX Webserver - Chinese Language Pack (中文语言包)
 * v1.0.0
 * 
 * 同时支持：
 * - Node.js 端：导出 pluginConfig（供插件系统识别）
 * - 浏览器端：执行 DOM 翻译引擎（前端中文化）
 */
(function() {
    'use strict';

    // ============================================================
    // Plugin 配置
    // ============================================================
    var pluginConfig = {
        name: 'Chinese Language Pack (中文语言包)',
        version: '1.0.0',
        author: 'FMDX Community',
        frontEndPath: 'language_zh/frontend.js'
    };

    // ============================================================
    // Node.js 导出
    // ============================================================
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { pluginConfig: pluginConfig };
        return;
    }

    // ============================================================
    // 浏览器环境：动态加载翻译引擎
    // ============================================================
    console.log('[Language ZH] Loading translation engine...');
    var script = document.createElement('script');
    script.src = 'js/plugins/language_zh/frontend.js';
    script.onload = function() {
        console.log('[Language ZH] Translation engine loaded successfully.');
    };
    script.onerror = function() {
        console.error('[Language ZH] Failed to load translation engine from js/plugins/language_zh/frontend.js');
    };
    document.head.appendChild(script);

})();
