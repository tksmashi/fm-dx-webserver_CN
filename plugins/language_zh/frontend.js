/**
 * FM-DX Webserver - Chinese Language Pack (中文语言包)
 * Frontend Translation Engine v1.0.0
 * 
 * 策略：DOM 文本节点遍历 + MutationObserver 动态监听 + PTY 数组覆盖
 */

(function() {
    'use strict';

    // ============================================================
    // 翻译映射表（内联以兼容插件 symlink 加载机制）
    // ============================================================
    var translations = {
        // --- Dashboard (index.ejs) ---
        "Device": "设备",
        "Server time": "服务器时间",
        "Owner contact": "管理员联系方式",
        "PI Code": "PI 代码",
        "Frequency": "频率",
        "Signal": "信号",
        "Online users": "在线用户",
        "Memory usage": "内存使用",
        "Uptime": "运行时间",
        "Play / Stop": "播放 / 停止",
        "Settings": "设置",
        "Toggle navigation": "切换导航",

        // --- Setup Dashboard ---
        "Dashboard": "仪表板",
        "Current users": "当前用户",
        "IP Address": "IP 地址",
        "Location": "位置",
        "Online since": "上线时间",
        "Kick": "踢出",
        "No users online": "无在线用户",
        "Quick settings": "快捷设置",
        "Unlocked Tuner": "解锁调谐器",
        "Admin lock": "管理员锁定",
        "Tune password": "调谐密码",
        "Admin password": "管理员密码",
        "Console": "控制台",
        "No console output available.": "暂无控制台输出。",
        "Go back to the main screen": "返回主界面",
        "Save settings": "保存设置",
        "Sign out": "退出登录",

        // --- Setup Tuner ---
        "Tuner": "调谐器",
        "Tuner settings": "调谐器设置",
        "Device type": "设备类型",
        "Connection type": "连接类型",
        "Direct": "直连",
        "Serial Port": "串口",
        "Choose your serial port": "选择串口",
        "xdrd IP address": "xdrd IP 地址",
        "xdrd port": "xdrd 端口",
        "xdrd password": "xdrd 密码",
        "Miscellaneous": "其他",
        "Bandwidth switch": "带宽切换",
        "Bandwidth switch allows the user to set the bandwidth manually.": "带宽切换允许用户手动设置带宽。",
        "Automatic shutdown": "自动关机",
        "Toggling this option will put the tuner to sleep when no clients are connected.": "启用此选项将在无客户端连接时让调谐器进入休眠。",
        "Auto-shutdown": "自动关机",
        "SI47XX AGC control": "SI47XX AGC 控制",
        "Allow users to change SI47XX AGC mode from the main UI.": "允许用户从主界面更改 SI47XX AGC 模式。",
        "Enable AGC control": "启用 AGC 控制",

        // --- Setup Audio ---
        "Audio": "音频",
        "Audio settings": "音频设置",
        "Audio device": "音频设备",
        "Choose your audio device": "选择音频设备",
        "Channels": "声道",
        "Audio channels": "音频声道",
        "Stereo": "立体声",
        "Mono": "单声道",
        "Bitrate": "比特率",
        "Audio quality": "音频质量",
        "64kbps (lowest quality)": "64kbps（最低质量）",
        "96kbps (low quality)": "96kbps（低质量）",
        "128kbps (standard)": "128kbps（标准）",
        "192kbps (high quality)": "192kbps（高质量）",
        "256kbps (very high quality)": "256kbps（极高质量）",
        "320kbps (ultra quality)": "320kbps（超高音质）",
        "Audio boost": "音频增强",
        "This option will boost the audio volume. Use if the output is too quiet.": "此选项将增强音频音量。如果输出音量太低可使用。",
        "Audio Boost": "音频增强",
        "Experimental": "实验性",
        "If you use a USB audio card on Linux, enabling this option might fix your audio issues.": "如果在 Linux 上使用 USB 声卡，启用此选项可能解决音频问题。",
        "ALSA Software mode": "ALSA 软件模式",
        "FFmpeg": "FFmpeg",
        "Legacy option for Linux / macOS that could resolve audio issues, but will consume additional CPU and RAM usage.": "Linux / macOS 的旧版选项，可解决音频问题，但会增加 CPU 和内存使用。",
        "Additional FFmpeg": "附加 FFmpeg",
        "Sample rate offset": "采样率偏移",

        // --- Setup Webserver ---
        "Webserver": "Web 服务器",
        "Webserver settings": "Web 服务器设置",
        "Connection": "连接",
        "Webserver IP": "Web 服务器 IP",
        "Webserver port": "Web 服务器端口",
        "Design": "外观设计",
        "Background image": "背景图片",
        "Direct image link": "图片直链",
        "Image link": "图片链接",
        "Themes": "主题",
        "Default server theme": "默认服务器主题",
        "Default": "默认",
        "Mint": "薄荷",
        "Cappuccino": "卡布奇诺",
        "Nature": "自然",
        "Ocean": "海洋",
        "Terminal": "终端",
        "Nightlife": "夜生活",
        "Blurple": "蓝紫",
        "Construction": "工地",
        "Amoled": "纯黑",
        "Antennas": "天线",
        "Antenna switch": "天线切换",
        "Antenna 1": "天线 1",
        "Antenna 1 name": "天线 1 名称",
        "Antenna 2": "天线 2",
        "Antenna 2 name": "天线 2 名称",
        "Antenna 3": "天线 3",
        "Antenna 3 name": "天线 3 名称",
        "Antenna 4": "天线 4",
        "Antenna 4 name": "天线 4 名称",
        "Tuning options": "调谐选项",
        "Limit tuning": "限制调谐",
        "Lower limit": "下限",
        "Upper limit": "上限",
        "Presets": "预设",
        "Preset 1": "预设 1",
        "Preset 2": "预设 2",
        "Preset 3": "预设 3",
        "Preset 4": "预设 4",
        "RDS Mode": "RDS 模式",
        "American RDS mode (RBDS)": "美国 RDS 模式 (RBDS)",
        "RDS Timeout": "RDS 超时",
        "Transmitter Search Algorithm": "发射台搜索算法",
        "Transmitter ID Algorithm": "发射台识别算法",
        "Algorithm 1": "算法 1",
        "Algorithm 2": "算法 2",
        "Algorithm 3": "算法 3",

        // --- Setup Identification ---
        "Identification & Map": "标识与地图",
        "Basic info": "基本信息",
        "Webserver name:": "Web 服务器名称：",
        "Fill your server name here.": "在此填写服务器名称。",
        "Webserver description:": "Web 服务器描述：",
        "Online map": "在线地图",
        "Broadcast to map": "广播到地图",
        "Owner contact": "管理员联系方式",
        "Proxy address": "代理地址",
        "Latitude": "纬度",
        "Longitude": "经度",

        // --- Setup Plugins ---
        "Plugins": "插件",
        "Plugin list": "插件列表",
        "Download new plugins here!": "在此下载新插件！",
        "Plugin settings": "插件设置",
        "No plugin settings are available.": "暂无插件设置可用。",

        // --- Setup Users ---
        "User management": "用户管理",
        "Chat options": "聊天选项",
        "Chat": "聊天",
        "Banlist": "封禁名单",
        "Ban date": "封禁日期",
        "Reason": "原因",
        "Unknown": "未知",
        "The banlist is empty.": "封禁名单为空。",
        "Ban reason (note)": "封禁原因（备注）",

        // --- Setup Startup ---
        "Startup": "启动",
        "Startup settings": "启动设置",
        "Volume": "音量",
        "Startup volume": "启动音量",
        "Default frequency": "默认频率",
        "Default frequency for first client": "首个客户端的默认频率",
        "On startup": "启动时",
        "cEQ": "cEQ",
        "iMS": "iMS",
        "RF+": "RF+",
        "IF+": "IF+",
        "Disabled": "禁用",
        "Enabled": "启用",
        "Antenna": "天线",
        "Antenna 0 (Default)": "天线 0（默认）",
        "Stereo Mode": "立体声模式",
        "Stereo (Default)": "立体声（默认）",
        "Empty server defaults": "空服务器默认值",
        "Auto BW": "自动带宽",
        "Unchanged": "不变",
        "Delayed Antenna Change": "延迟天线切换",

        // --- Setup Extras ---
        "Extras": "扩展",
        "FMLIST Integration": "FMLIST 集成",
        "FMLIST integration": "FMLIST 集成",
        "Admin-only logging": "仅管理员记录",
        "OMID": "OMID",
        "Tunnel": "隧道",
        "Main tunnel settings": "主隧道设置",
        "Enable tunnel": "启用隧道",
        "Official server region": "官方服务器区域",
        "Europe": "欧洲",
        "Americas": "美洲",
        "Asia & Oceania": "亚洲与大洋洲",
        "Username": "用户名",
        "Token": "令牌",
        "Subdomain name": "子域名",
        "Low latency mode": "低延迟模式",
        "Community tunnel settings": "社区隧道设置",
        "Use a community tunnel": "使用社区隧道",
        "Community Tunnel host (IP or hostname)": "社区隧道主机（IP 或主机名）",

        // --- Wizard ---
        "[SETUP WIZARD]": "[设置向导]",
        "Basic settings": "基本设置",
        "Welcome to the setup wizard! Let's set up some basic things.": "欢迎使用设置向导！让我们设置一些基本选项。",
        "Webserver connection": "Web 服务器连接",
        "Tuner type": "调谐器类型",
        "Tuner connection": "调谐器连接",
        "It's time to choose your Serial port.": "现在选择串口。",
        "In this section, we will set up the audio.<br>Choose the audio port your tuner is connected to and desired audio settings here.": "在此部分，我们将设置音频。<br>选择调谐器连接的音频端口和所需的音频设置。",
        "Recommended defaults have already been set for the audio quality, you can keep them as-is.": "音频质量已推荐默认设置，可保持不变。",
        "Webserver info": "Web 服务器信息",
        "Map broadcast": "地图广播",
        "Allow tuning without password": "允许无密码调谐",
        "Admin panel settings": "管理面板设置",
        "We are at the last and final step of the wizard.": "我们来到向导的最后一步。",
        "Next": "下一步",

        // --- Login ---
        "Login": "登录",
        "Password": "密码",
        "Log in": "登录",
        "You are currently not logged in as an administrator and therefore can't change the settings.": "您当前未以管理员身份登录，因此无法更改设置。",
        "Please login below.": "请在下方登录。",

        // --- 403 ---
        "There's a possibility you were kicked by the system.<br>Please try again later.": "您可能已被系统踢出。<br>请稍后再试。",
        "Reason:": "原因：",

        // --- Chat ---
        "[ADMIN]": "[管理员]",

        // --- Toast ---
        "Success": "成功",
        "Error": "错误",
        "Warning": "警告",
        "Info": "信息",

        // --- Common ---
        "Yes": "是",
        "No": "否",
        "Cancel": "取消",
        "OK": "确定",
        "Close": "关闭",
        "Submit": "提交",
        "Loading...": "加载中...",
        "Settings saved successfully!": "设置保存成功！",
        "An error occurred while saving settings.": "保存设置时发生错误。",
        "Copy to clipboard": "复制到剪贴板",
        "Copied!": "已复制！",
        "Connected to tuner.": "已连接到调谐器。",
        "Disconnected from tuner.": "已断开调谐器连接。",
        "Connecting...": "连接中...",
        "Reconnecting...": "重新连接中...",
        "Fill the server description here. You can put useful info here such as your antenna setup. You can use simple markdown.": "在此填写服务器描述。可以放置天线设置等有用信息。可使用简单 Markdown。",
        "If your location info is filled, you can add your tuner to a public list.": "如果已填写位置信息，可将调谐器添加到公开列表中。",
        "Location info is useful for automatic identification of stations using RDS.": "位置信息有助于通过 RDS 自动识别电台。",
        "If you use a proxy / tunnel service, enter the access link here. If you don't know what a proxy is, leave it empty.": "如果使用代理/隧道服务，在此输入访问链接。如果不了解代理，请留空。",
        "Broadcast address (if using a proxy)": "广播地址（如使用代理）",
        "Here we can set the password. Tune password is optional.<br>Setting an admin password allows you to change settings later and setting one up is mandatory.": "在此设置密码。调谐密码为可选。<br>设置管理员密码是必需的，它允许您以后更改设置。",
        "You can now click the <strong>save button</strong> to save your settings. After that, you will need to restart the webserver.": "现在可点击<strong>保存按钮</strong>保存设置。之后需要重启 Web 服务器。",
        "If you are connecting your tuner <strong>wirelessly</strong>, enter the tuner IP. <br> If you use <strong>xdrd</strong>, use 127.0.0.1 as your IP.": "如果通过<strong>无线</strong>方式连接调谐器，请输入调谐器 IP。<br>如果使用<strong>xdrd</strong>，请使用 127.0.0.1 作为 IP。",
        "Leave the IP at 0.0.0.0 unless you explicitly know you have to change it.<br>Don't enter your public IP here.": "除非明确需要更改，否则请保持 IP 为 0.0.0.0。<br>不要在此输入公网 IP。",
        "Leave the IP at 0.0.0.0 unless you explicitly know you have to change it.<br>DO NOT enter your public IP here.": "除非明确需要更改，否则请保持 IP 为 0.0.0.0。<br>切勿在此输入公网 IP。",
        "Settings a proper device type ensures that the correct interface and settings will load.": "设置正确的设备类型可确保加载正确的接口和设置。",
        "If you want to choose the Serial port directly, choose \"Direct\".<br>If you use xdrd or your receiver is connected via Wi-Fi, choose TCP/IP.": "如需直接选择串口，请选择\"直连\"。<br>如果使用 xdrd 或接收器通过 Wi-Fi 连接，请选择 TCP/IP。",
        "Choose your desired <strong>Serial port</strong><br>&nbsp;": "选择所需的<strong>串口</strong><br>&nbsp;",
        "Your audio device port.<br><span class=\"text-gray\">This is where your tuner is plugged in.</span>": "音频设备端口。<br><span class=\"text-gray\">这是调谐器插入的位置。</span>",
        "Audio channel count.<br><span class=\"text-gray\">Choose between Mono / Stereo.</span>": "音频声道数。<br><span class=\"text-gray\">选择单声道 / 立体声。</span>",
        "The bitrate of the mp3 audio.<br><span class=\"text-gray\">Minimum: 64 Kbps • Maximum: 320 Kbps</span>": "MP3 音频比特率。<br><span class=\"text-gray\">最低：64 Kbps • 最高：320 Kbps</span>",
        "Using a negative value could eliminate audio buffering issues during long periods of listening. <br>However, a value that's too low might increase the buffer over time.": "使用负值可以消除长时间收听时的音频缓冲问题。<br>但值太低可能随时间增加缓冲区。",
        "If you want to limit which frequencies the users can tune to,<br>you can set the lower and upper limit here.<br><span class=\"text-gray\">Enter frequencies in MHz.</span>": "如需限制用户可调谐的频率范围，<br>可在此设置下限和上限。<br><span class=\"text-gray\">以 MHz 为单位输入频率。</span>",
        "You can set up to 4 presets.<br>These presets are accessible with the F1-F4 buttons.<br><span class=\"text-gray\">Enter frequencies in MHz.</span>": "最多可设置 4 个预设。<br>可通过 F1-F4 按钮访问这些预设。<br><span class=\"text-gray\">以 MHz 为单位输入频率。</span>",
        "You can switch between American (RBDS) / Global (RDS) mode here.": "可在此切换美国 (RBDS) / 全球 (RDS) 模式。",
        "If no data is received, RDS will be automatically cleared after a timeout.<br><span class=\"text-gray\">Enter timeout in seconds or 0 to disable.</span><br>": "如果未收到数据，RDS 将在超时后自动清除。<br><span class=\"text-gray\">输入超时秒数，或输入 0 禁用。</span><br>",
        "Different modes may help with more accurate transmitter identification depending on your region.": "不同模式可能根据您所在地区帮助更准确地识别发射台。",
        "Set your tuner name and description here.<br>This info will be visible to anyone who tunes in.": "在此设置调谐器名称和描述。<br>此信息对所有收听者可见。",
        "If your location information is filled,<br>you can add your tuner to a public list.": "如果已填写位置信息，<br>可将调谐器添加到公开列表中。",
        "Any compatible <strong>.js</strong> plugin, which is in the \"plugins\" folder, will be listed here.<br>Click on the individual plugins to enable/disable them.": "\"plugins\" 文件夹中的所有兼容 <strong>.js</strong> 插件将在此列出。<br>点击单个插件可启用/禁用。",
        "If you have users that don't behave on your server, you can choose to ban them by their IP address.<br><span class=\"text-gray\">You can see their IP address by hovering over their nickname. One IP per row.</span>": "如果有用户行为不当，可按 IP 地址封禁。<br><span class=\"text-gray\">将鼠标悬停在昵称上可查看 IP 地址。每行一个 IP。</span>",
        "These settings will be applied after a server launch or restart.": "这些设置将在服务器启动或重启后生效。",
        "These settings will apply once the last user disconnects from the server, so the server can be ready for a new user with default settings.": "当最后一个用户断开连接时，这些设置将生效，以便服务器以默认设置准备好迎接新用户。",
        "When you become an <a href=\"https://buymeacoffee.com/fmdx\" target=\"_blank\"><strong>FMDX.org supporter</strong></a>, you can host your webserver without the need of a public IP address & port forwarding.<br>When you become a supporter, you can message the Founders on Discord for your login details.": "成为 <a href=\"https://buymeacoffee.com/fmdx\" target=\"_blank\"><strong>FMDX.org 支持者</strong></a> 后，无需公网 IP 和端口转发即可托管 Web 服务器。<br>成为支持者后，可在 Discord 上联系创始人获取登录信息。",
        "Enabling low latency mode may provide better experience, however it will also use more bandwidth.": "启用低延迟模式可能提供更好的体验，但也会消耗更多带宽。",
        "You can also self-host or ask other people to provide you a token. In this case, the server owner is responsible for any potential security issues.": "您也可以自行托管或请他人提供令牌。此情况下，服务器所有者需对潜在安全问题负责。",
        "You can also fill in your OMID from FMLIST.org, if you want the logs to be saved to your account.": "如果希望日志保存到您的帐户，可填写 FMLIST.org 的 OMID。",
        "If you don't feel comfortable with the general public logging on your server, you can make this feature available only for people with a password": "如果不希望公众在您的服务器上记录日志，可将此功能设为仅密码用户可用",
        "FMLIST integration allows you to get potential DXes logged on the <a href=\"http://fmlist.org/fm_logmap.php?hours=900\" target=\"_blank\" class=\"text-bold color-4\">FMLIST Visual Logbook</a>.<br>Your server also needs to have a valid UUID, which is obtained by registering on maps in the <strong>Identification & Map</strong> tab.": "FMLIST 集成允许您获取记录在 <a href=\"http://fmlist.org/fm_logmap.php?hours=900\" target=\"_blank\" class=\"text-bold color-4\">FMLIST 可视化日志</a> 上的潜在 DX 信号。<br>您的服务器还需要一个有效的 UUID，可通过在<strong>标识与地图</strong>标签中注册地图获取。",
        "In this part, we will set up your webserver info, such as the server name, description and location.": "在此部分，我们将设置 Web 服务器信息，如服务器名称、描述和位置。",
        "Check your tuner at <strong><a href=\"https://servers.fmdx.org\" target=\"_blank\" class=\"color-4\">servers.fmdx.org</a></strong>.": "在 <strong><a href=\"https://servers.fmdx.org\" target=\"_blank\" class=\"color-4\">servers.fmdx.org</a></strong> 查看您的调谐器。",
        "By activating the <strong>Broadcast to map</strong> option,<br>you agree to the <a href=\"https://fmdx.org/projects/webserver.php#rules\" target=\"_blank\">Terms of Service</a>.": "激活<strong>广播到地图</strong>选项即表示您同意<a href=\"https://fmdx.org/projects/webserver.php#rules\" target=\"_blank\">服务条款</a>。",
        "The list is available at <strong><a href=\"https://servers.fmdx.org\" target=\"_blank\" class=\"color-4\">servers.fmdx.org</a></strong>.": "列表可在 <strong><a href=\"https://servers.fmdx.org\" target=\"_blank\" class=\"color-4\">servers.fmdx.org</a></strong> 查看。",
        "Feel free to contact us on": "欢迎通过",
        "for community support.": "联系我们获取社区支持。",
        "Version:": "版本：",

        // --- Tooltips ---
        "Only people with tune password can tune.": "仅拥有调谐密码的用户可调谐。",
        "Tuner is currently locked to admin.": "调谐器当前已锁定至管理员。",
        "Stereo / Mono toggle. <br><strong>Click to toggle.": "立体声 / 单声道切换。<br><strong>点击切换。",
        "Clicking on the PI code will show the current station on a map.": "点击 PI 代码可在地图上显示当前电台。",
        "Clicking on the RDS PS will copy the RDS info into the clipboard.": "点击 RDS PS 可将 RDS 信息复制到剪贴板。",
        "Chatbox": "聊天框",

        // --- Fragmented text nodes（<br>/<strong>/<a> 分隔的独立文本节点） ---
        " audio channel count.": " 音频声道数。",
        "Choose between 单声道 / 立体声.": "选择单声道 / 立体声。",
        "Minimum: 64 Kbps • Maximum: 320 Kbps": "最低：64 Kbps • 最高：320 Kbps",
        "Your audio device port.": "您的音频设备端口。",
        "This is where your tuner is plugged in.": "这是调谐器插入的位置。",
        "Using a negative value could eliminate audio buffering issues during long periods of listening. ": "使用负值可消除长时间收听时的音频缓冲问题。",
        "However, a value that\u2019s too low might increase the buffer over time.": "但值太低可能随时间增加缓冲区。",
        "Leave the IP at 0.0.0.0 unless you explicitly know you have to change it.": "除非明确需要更改，否则请保持 IP 为 0.0.0.0。",
        "Don't enter your public IP here.": "不要在此输入公网 IP。",
        "Direct image link": "图片直链",
        "Ant A": "天线 A",
        "Ant B": "天线 B",
        "Ant C": "天线 C",
        "Ant D": "天线 D",
        "If you want to limit which frequencies the users can tune to,": "如需限制用户可调谐的频率范围，",
        "you can set the lower and upper limit here.": "可在此设置下限和上限。",
        "Enter frequencies in MHz.": "以 MHz 为单位输入频率。",
        "You can set up to 4 presets.": "最多可设置 4 个预设。",
        "These presets are accessible with the F1-F4 buttons.": "可通过 F1-F4 按钮访问这些预设。",
        "If no data is received, RDS will be automatically cleared after a timeout.": "如果未收到数据，RDS 将在超时后自动清除。",
        "Enter timeout in seconds or 0 to disable.": "输入超时秒数，或输入 0 禁用。",
        "Set your tuner name and description here.": "在此设置调谐器名称和描述。",
        "This info will be visible to anyone who tunes in.": "此信息对所有收听者可见。",
        "Fill your server name here.": "在此填写服务器名称。",
        "Fill the server description here. You can put useful info here such as your antenna setup. You can use simple markdown.": "在此填写服务器描述。可放置天线设置等有用信息。可使用简单 Markdown。",
        "If your location information is filled,": "如果已填写位置信息，",
        "you can add your tuner to a public list.": "可将调谐器添加到公开列表中。",
        "Your e-mail or Discord...": "您的邮箱或 Discord...",
        "Check your tuner at": "在",
        "Terms of Service": "服务条款",
        "By activating the": "激活",
        "you agree to the": "即表示您同意",
        "option,": "选项，",
        "Zoom in": "放大",
        "Zoom out": "缩小",
        "FMLIST 集成 allows you to get potential DXes logged on the ": "FMLIST 集成允许您获取记录在 ",
        "FMLIST Visual Logbook": "FMLIST 可视化日志",
        "Your server also needs to have a valid UUID, which is obtained by registering on maps in the": "您的服务器还需要一个有效的 UUID，可通过在",
        "tab.": "标签中注册地图获取。",
        "When you become an": "成为",
        "FMDX.org supporter": "FMDX.org 支持者",
        ", you can host your webserver without the need of a public IP address & port forwarding.": " 后，无需公网 IP 和端口转发即可托管 Web 服务器。",
        "When you become a supporter, you can message the Founders on Discord for your login details.": "成为支持者后，可在 Discord 上联系创始人获取登录信息。",
        "If you want to choose the Serial port directly, choose \"": "如需直接选择串口，请选择\"",
        "\". If you use xdrd or your receiver is connected via Wi-Fi, choose TCP/IP.": "\"。如果使用 xdrd 或接收器通过 Wi-Fi 连接，请选择 TCP/IP。",
        "If you are connecting your tuner ": "如果通过",
        " wirelessly": "无线",
        ", enter the tuner IP. ": " 连接调谐器，请输入调谐器 IP。",
        "If you use ": "如果使用",
        "wirelessly": "无线方式",
        "xdrd": "xdrd",
        " or your receiver is connected via Wi-Fi, choose TCP/IP.": " 或您的接收器通过 Wi-Fi 连接，请选择 TCP/IP。",
        ", use 127.0.0.1 as your IP.": "，请使用 127.0.0.1 作为 IP。",
        "The bitrate of the mp3 audio.": "MP3 音频比特率。",
        " channel count.": "声道数。",
        "Choose between 单声道 / 立体声.": "选择单声道 / 立体声。",
        "Choose between ": "选择",
        "Choose your audio device": "选择音频设备",
        " 单声道 / 立体声.": " 单声道 / 立体声。",
        "Direct image link": "图片直链",
        "FMLIST 集成 allows you to get potential DXes logged on the ": "FMLIST 集成允许您获取记录在 ",
        "IP address": "IP 地址",
        "Ban reason (note)": "封禁原因（备注）",
        "Any compatible": "所有兼容的",
        " plugin, which is in the \"plugins\" folder, will be listed here.": " 插件（位于 \"plugins\" 文件夹中）将在此列出。",
        "Click on the individual plugins to enable/disable them.": "点击单个插件可启用/禁用。",
        "If you have users that don't behave on your server, you can choose to ban them by their IP address.": "如果有用户行为不当，可按 IP 地址封禁。",
        "You can see their IP address by hovering over their nickname. One IP per row.": "将鼠标悬停在昵称上可查看 IP 地址。每行一个 IP。"
    };

    // ============================================================
    // European PTY Programme Types (RDS Standard EN 50067)
    // ============================================================
    var ptyEuropeZh = [
        "无分类",           // 0: No PTY
        "新闻",             // 1: News
        "时事",             // 2: Current Affairs
        "信息",             // 3: Info
        "体育",             // 4: Sport
        "教育",             // 5: Education
        "戏剧",             // 6: Drama
        "文化",             // 7: Culture
        "科学",             // 8: Science
        "综合",             // 9: Varied
        "流行音乐",         // 10: Pop Music
        "摇滚音乐",         // 11: Rock Music
        "轻音乐",           // 12: Easy Listening
        "轻古典",           // 13: Light Classical
        "严肃古典",         // 14: Serious Classical
        "其他音乐",         // 15: Other Music
        "天气",             // 16: Weather
        "财经",             // 17: Finance
        "儿童节目",         // 18: Children's Programmes
        "社会事务",         // 19: Social Affairs
        "宗教",             // 20: Religion
        "听众热线",         // 21: Phone-in
        "旅游",             // 22: Travel
        "休闲",             // 23: Leisure
        "爵士音乐",         // 24: Jazz Music
        "乡村音乐",         // 25: Country Music
        "民族音乐",         // 26: National Music
        "怀旧音乐",         // 27: Oldies Music
        "民谣音乐",         // 28: Folk Music
        "纪录片",           // 29: Documentary
        "警报测试",         // 30: Alarm Test
        "警报"              // 31: Alarm
    ];

    // ============================================================
    // USA RBDS Programme Types (NRSC-4-B)
    // ============================================================
    var ptyUsaZh = [
        "无分类",           // 0: No PTY
        "新闻",             // 1: News
        "信息",             // 2: Information
        "体育",             // 3: Sports
        "谈话",             // 4: Talk
        "摇滚",             // 5: Rock
        "经典摇滚",         // 6: Classic Rock
        "成人金曲",         // 7: Adults Hits
        "轻摇滚",           // 8: Soft Rock
        "流行榜",           // 9: Top 40
        "乡村",             // 10: Country
        "怀旧",             // 11: Oldies
        "轻音乐",           // 12: Soft Music
        "怀旧金曲",         // 13: Nostalgia
        "爵士",             // 14: Jazz
        "古典",             // 15: Classical
        "节奏蓝调",         // 16: Rhythm and Blues
        "轻柔节奏蓝调",     // 17: Soft Rhythm and Blues
        "语言",             // 18: Language
        "宗教音乐",         // 19: Religious Music
        "宗教谈话",         // 20: Religious Talk
        "名人访谈",         // 21: Personality
        "公共",             // 22: Public
        "校园",             // 23: College
        "西班牙语谈话",     // 24: Spanish Talk
        "西班牙语音乐",     // 25: Spanish Music
        "嘻哈",             // 26: Hip Hop
        "",                 // 27: (unassigned)
        "",                 // 28: (unassigned)
        "天气",             // 29: Weather
        "紧急测试",         // 30: Emergency Test
        "紧急"              // 31: Emergency
    ];

    // ============================================================
    // DOM 翻译引擎
    // ============================================================

    // 需要跳过的标签（不翻译其文本内容）
    var SKIP_TAGS = ['SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA', 'INPUT', 'NOSCRIPT'];

    // 构建长字符串优先匹配列表（避免短字符串部分匹配）
    var translationKeys = Object.keys(translations).sort(function(a, b) {
        return b.length - a.length; // 按长度降序排列
    });

    /**
     * 翻译单个文本节点中的内容
     */
    function translateTextNode(textNode) {
        var text = textNode.nodeValue;
        if (!text || !text.trim()) return;

        var original = text;
        for (var i = 0; i < translationKeys.length; i++) {
            var key = translationKeys[i];
            if (text.indexOf(key) !== -1) {
                text = text.split(key).join(translations[key]);
            }
        }
        if (text !== original) {
            textNode.nodeValue = text;
        }
    }

    /**
     * 递归遍历 DOM 树，翻译所有文本节点
     */
    function translateElement(element) {
        if (!element) return;

        // 翻译属性
        translateAttributes(element);

        // 遍历子节点
        var children = element.childNodes;
        for (var i = 0; i < children.length; i++) {
            var node = children[i];
            if (node.nodeType === Node.TEXT_NODE) {
                translateTextNode(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                if (SKIP_TAGS.indexOf(node.tagName) === -1) {
                    translateElement(node);
                }
            }
        }
    }

    /**
     * 翻译元素的特定属性
     */
    function translateAttributes(element) {
        // placeholder 属性
        if (element.hasAttribute && element.hasAttribute('placeholder')) {
            var placeholder = element.getAttribute('placeholder');
            if (placeholder && translations[placeholder]) {
                element.setAttribute('placeholder', translations[placeholder]);
            }
        }

        // data-tooltip 属性
        if (element.hasAttribute && element.hasAttribute('data-tooltip')) {
            var tooltip = element.getAttribute('data-tooltip');
            if (tooltip && translations[tooltip]) {
                element.setAttribute('data-tooltip', translations[tooltip]);
            }
        }

        // aria-label 属性
        if (element.hasAttribute && element.hasAttribute('aria-label')) {
            var ariaLabel = element.getAttribute('aria-label');
            if (ariaLabel && translations[ariaLabel]) {
                element.setAttribute('aria-label', translations[ariaLabel]);
            }
        }

        // title 属性
        if (element.hasAttribute && element.hasAttribute('title')) {
            var title = element.getAttribute('title');
            if (title && translations[title]) {
                element.setAttribute('title', translations[title]);
            }
        }
    }

    /**
     * 翻译页面标题
     */
    function translatePageTitle() {
        var titleEl = document.querySelector('title');
        if (titleEl) {
            var title = titleEl.textContent;
            // Translate known title patterns
            if (title.indexOf('Setup - FM-DX Webserver') !== -1) {
                titleEl.textContent = title.replace('Setup - FM-DX Webserver', '设置 - FM-DX Web 服务器');
            } else if (title.indexOf('Login - FM-DX Webserver') !== -1) {
                titleEl.textContent = title.replace('Login - FM-DX Webserver', '登录 - FM-DX Web 服务器');
            } else if (title.indexOf('Unauthorized - FM-DX Webserver') !== -1) {
                titleEl.textContent = title.replace('Unauthorized - FM-DX Webserver', '未授权 - FM-DX Web 服务器');
            } else if (title.indexOf('Wizard - FM-DX Webserver') !== -1) {
                titleEl.textContent = title.replace('Wizard - FM-DX Webserver', '向导 - FM-DX Web 服务器');
            } else if (title.indexOf('FM-DX Webserver') !== -1) {
                titleEl.textContent = title.replace('FM-DX Webserver', 'FM-DX Web 服务器');
            }
        }
    }

    /**
     * 覆盖 PTY 数组（在 main.js 加载后执行）
     */
    function overridePtyArrays() {
        // 多次尝试覆盖，因为 main.js 可能在插件之后加载
        function tryOverride() {
            if (typeof window.europe_programmes !== 'undefined') {
                window.europe_programmes = ptyEuropeZh;
            }
            if (typeof window.usa_programmes !== 'undefined') {
                window.usa_programmes = ptyUsaZh;
            }
        }

        // 立即尝试
        tryOverride();

        // 延迟重试（等待 main.js 加载）
        var retries = 0;
        var maxRetries = 20;
        var retryInterval = setInterval(function() {
            tryOverride();
            retries++;
            if (retries >= maxRetries) {
                clearInterval(retryInterval);
            }
        }, 500);
    }

    /**
     * 翻译动态添加的 Toast 通知
     */
    function setupToastInterceptor() {
        if (typeof window.sendToast !== 'undefined') {
            var originalSendToast = window.sendToast;
            window.sendToast = function(type, title, message, persistent, important) {
                // 翻译 toast 类型标题
                var translatedType = translations[type.charAt(0).toUpperCase() + type.slice(1)] || type;
                // 翻译自定义 title 和 message
                if (title && translations[title]) title = translations[title];
                if (message && translations[message]) message = translations[message];
                originalSendToast(translatedType, title, message, persistent, important);
            };
        } else {
            // sendToast 还未加载，延迟重试
            setTimeout(setupToastInterceptor, 1000);
        }
    }

    // ============================================================
    // MutationObserver — 监听动态 DOM 变化
    // ============================================================

    var observer;
    var observerThrottleTimer;

    function startMutationObserver() {
        if (observer) return;

        observer = new MutationObserver(function(mutations) {
            // 节流：200ms 内只执行一次
            if (observerThrottleTimer) return;
            observerThrottleTimer = setTimeout(function() {
                observerThrottleTimer = null;
                mutations.forEach(function(mutation) {
                    // 新增节点
                    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                        for (var i = 0; i < mutation.addedNodes.length; i++) {
                            var node = mutation.addedNodes[i];
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                translateElement(node);
                            } else if (node.nodeType === Node.TEXT_NODE) {
                                translateTextNode(node);
                            }
                        }
                    }
                    // 属性变化
                    if (mutation.type === 'attributes' && mutation.target) {
                        translateAttributes(mutation.target);
                    }
                });
            }, 200);
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['placeholder', 'data-tooltip', 'aria-label', 'title']
        });
    }

    // ============================================================
    // 插件 WebSocket 事件监听
    // ============================================================
    function setupPluginEventListener() {
        // 尝试通过插件 WebSocket 监听语言切换事件
        if (window.pluginsWss && window.pluginsWss.readyState === WebSocket.OPEN) {
            window.pluginsWss.addEventListener('message', function(event) {
                try {
                    var data = JSON.parse(event.data);
                    if (data.event === 'language:switch' && data.lang) {
                        console.log('[Language ZH] Language switch requested:', data.lang);
                        // 未来可扩展多语言切换
                    }
                } catch (e) {}
            });
        }
    }

    // ============================================================
    // 初始化
    // ============================================================
    function init() {
        console.log('[Language ZH] Chinese Language Pack v1.0.0 initialized');

        // 1. 翻译页面标题
        translatePageTitle();

        // 2. 翻译整个 DOM
        translateElement(document.body);

        // 3. 覆盖 PTY 数组
        overridePtyArrays();

        // 4. 启动 MutationObserver 监听动态变化
        if (document.body) {
            startMutationObserver();
        } else {
            document.addEventListener('DOMContentLoaded', startMutationObserver);
        }

        // 5. 拦截 Toast 通知
        setupToastInterceptor();

        // 6. 监听插件事件（延迟，等待 WebSocket 就绪）
        setTimeout(setupPluginEventListener, 3000);
    }

    // 当 DOM 就绪时启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
