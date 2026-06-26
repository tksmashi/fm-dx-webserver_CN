# FM-DX Webserver 中文版 📻🌐

本项目是基于 [FM-DX Webserver](https://github.com/NoobishSVK/fm-dx-webserver)（作者：NoobishSVK @ FMDX.org）的中文增强版本。

## 与原项目的关系

- **上游项目**: https://github.com/NoobishSVK/fm-dx-webserver
- **原项目许可**: GNU-GPL v3
- **本仓库**: 同步上游源码，附加中文语言插件
- **差异**: 仅新增 `plugins/language_zh/` 插件目录及相关文档，未修改任何上游核心代码

## 新增功能：中文语言插件

本仓库内置了 `Chinese Language Pack (中文语言包)` 插件，启用后 Web 界面自动显示简体中文，覆盖主仪表板和设置面板的全部页面。

### 启动步骤

#### 1. 安装依赖

```bash
npm install
```

> 国内用户建议先切换镜像源：`npm config set registry https://registry.npmmirror.com`

#### 2. 首次启动（生成配置文件）

```bash
node index.js
```

首次运行会在项目根目录生成 `config.json`。启动成功后按 `Ctrl+C` 停止。

#### 3. 启用中文插件

编辑 `config.json`，找到 `"plugins"` 字段，添加 `"language_zh.js"`：

```json
"plugins": ["language_zh.js"]
```

同时建议设置一个管理员密码（首次设置时需要）：

```json
"password": {
    "adminPass": "你的密码"
}
```

> Windows 用户如遇端口 8080 被占用，可在 `config.json` 中将 `webserverPort` 改为其他端口（如 `3000`）。

#### 4. 重新启动

```bash
node index.js
```

浏览器访问 `http://localhost:3000`（或你配置的端口），即可看到中文界面。

### 设置页面

访问 `http://localhost:3000/setup`，使用上一步设置的管理员密码登录，可进入完整的设置面板。

### 插件结构

```
plugins/
├── language_zh.js              # 插件入口（配置导出 + 动态加载器）
├── language_zh_server.js       # 服务端：Accept-Language 请求头检测
└── language_zh/
    ├── frontend.js             # 核心翻译引擎（~280 条翻译映射）
    └── zh-CN.json              # 翻译参考字典（模块化整理）
```

### 翻译覆盖率

| 页面 | 状态 |
|------|:--:|
| 主仪表板 `/` | ✅ |
| 设置面板 `/setup`（9 个标签页） | ✅ |
| 设置向导 `/wizard` | ❌（上游模板未加载插件脚本） |
| 登录页 | ❌（上游模板未加载插件脚本） |
| 403 封禁页 `/403` | ❌（上游模板未加载插件脚本） |

### 创建其他语言包

1. 复制 `plugins/language_zh/` → `plugins/language_xx/`
2. 翻译 `frontend.js` 中的翻译字典
3. 创建 `plugins/language_xx.js` 入口文件
4. 创建 `plugins/language_xx_server.js`
5. 在 `config.json` 的 `plugins` 中添加 `"language_xx.js"`

## 社区

欢迎加入 FMDX.org 社区的 [Discord](https://discord.gg/ZAVNdS74mC) 交流讨论。

## 许可

本项目遵循与原项目相同的 [GNU-GPL v3 License](LICENSE.md)。请遵守当地法规托管服务器。

Happy DXing! 🎶📡
