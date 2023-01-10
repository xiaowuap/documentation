(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{431:function(t,e,a){"use strict";a.r(e);var s=a(48),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"额外配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#额外配置"}},[t._v("#")]),t._v(" 额外配置")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#提供身份验证"}},[t._v("提供身份验证")]),a("ul",[a("li",[a("a",{attrs:{href:"#可用密钥"}},[t._v("可用密钥")])]),a("li",[a("a",{attrs:{href:"#使用示例"}},[t._v("使用示例")])])])]),a("li",[a("a",{attrs:{href:"#自定义网络模式"}},[t._v("自定义网络模式")]),a("ul",[a("li",[a("a",{attrs:{href:"#使用示例"}},[t._v("使用示例")])])])]),a("li",[a("a",{attrs:{href:"#使用-cloudflare-代理"}},[t._v("使用 Cloudflare 代理")])]),a("li",[a("a",{attrs:{href:"#容器-pid-限制"}},[t._v("容器 PID 限制")]),a("ul",[a("li",[a("a",{attrs:{href:"#使用示例"}},[t._v("使用示例")])])])]),a("li",[a("a",{attrs:{href:"#流量限制"}},[t._v("流量限制")]),a("ul",[a("li",[a("a",{attrs:{href:"#使用示例"}},[t._v("使用示例")])])])]),a("li",[a("a",{attrs:{href:"#安装限制"}},[t._v("安装限制")]),a("ul",[a("li",[a("a",{attrs:{href:"#使用示例"}},[t._v("使用示例")])])])]),a("li",[a("a",{attrs:{href:"#其他内容"}},[t._v("其他内容")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("这些是给 Wings 的额外配置,请小心进行配置否则您将有概率损坏 Wings")])]),t._v(" "),a("p",[t._v("您需要将 "),a("code",[t._v("config.yml")]),t._v(" 放入 "),a("code",[t._v("/etc/pterodactyl")]),t._v(" 文件夹然后重启Wings来应用更改设置,请确认您使用的格式是 Yaml ,您可以使用 "),a("a",{attrs:{href:"http://www.yamllint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yaml Lint"),a("OutboundLink")],1),t._v(" 这样在运行出错时,您就可以收到类似的错误")]),t._v(" "),a("h2",{attrs:{id:"提供身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供身份验证"}},[t._v("#")]),t._v(" 提供身份验证")]),t._v(" "),a("p",[t._v("在拉取 Docker 镜像时,您可以使用这些设置来对私有 Docker 进行身份验证")]),t._v(" "),a("h3",{attrs:{id:"可用密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用密钥"}},[t._v("#")]),t._v(" 可用密钥")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("设置密钥")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",[t._v("认证地址")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",[t._v("认证用户名")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",[t._v("认证密码")])])])]),t._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry.example.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registryusername"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registrypassword"')]),t._v("\n")])])]),a("h2",{attrs:{id:"自定义网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义网络模式"}},[t._v("#")]),t._v(" 自定义网络模式")]),t._v(" "),a("p",[t._v("您可以通过编辑网络模式来更改 Wings 所用 Docker 的网络模式;这通常默认设置为 "),a("code",[t._v("pterodactyl_nw")]),t._v(",例如,如果要启用 Docker 的主机模式请将网络模式更改为 "),a("code",[t._v("host")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("更改网络模式为 "),a("code",[t._v("host")]),t._v(" 将允许面板直接访问所有主机,面板用户可以绑定到任意的IP或端口(即使没有分配给用户服务器)您将会失去 Docker 网络隔离的保护,所以我们不建议您用于公共 IDC 出租时使用")])]),t._v(" "),a("h3",{attrs:{id:"使用示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-2"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n")])])]),a("p",[t._v("再更改后需要重新启动 Wings (可运行以下命令),您需要注意的是所有风险将由您自己承担!\n"),a("code",[t._v("systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings")])]),t._v(" "),a("h2",{attrs:{id:"使用-cloudflare-代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-cloudflare-代理"}},[t._v("#")]),t._v(" 使用 Cloudflare 代理")]),t._v(" "),a("p",[t._v("使用 Cloudflare 代理 Wings 并没有什么用,因为用户依旧会直连主机，而中间的 Cloudflare 并没有起什么作用,所以您的服务器 IP 仍会被公开")]),t._v(" "),a("p",[t._v("如果需要启动 Cloudflare 代理您必须将 Wings 端口更改为启用缓存的 Cloudflare 的 HTTPS 端口 "),a("code",[t._v("8443")]),t._v("(更多信息 "),a("a",{attrs:{href:"https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/",target:"_blank",rel:"noopener noreferrer"}},[t._v("访问这里"),a("OutboundLink")],1),t._v('),因为 Cloudflare 只支持 8080 端口的 HTTP 协议,您可以在管理页面那里进行更改此端口，在 Cloudflare 中使用 完全SSL 时，请确保设置为 "未使用CDN"，然后到 Cloudflare DNS记录设置页将您 FQDN 旁边的橙色云启用。')]),t._v(" "),a("p",[t._v("有个问题在于,如果你不购买 Cloudflare 的 "),a("code",[t._v("企业")]),t._v(" 套餐,那么就不能代理 SFTP 端口")]),t._v(" "),a("h2",{attrs:{id:"容器-pid-限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器-pid-限制"}},[t._v("#")]),t._v(" 容器 PID 限制")]),t._v(" "),a("p",[t._v("您可以通过更改 "),a("code",[t._v("container_pid_limit")]),t._v(" 值来更改在任何给定时刻可在容器中运行的进程总数。默认值为"),a("code",[t._v("512")]),t._v("。\n您可以将其设置为 "),a("code",[t._v("0")]),t._v(" 以完全禁用限制。但是！不推荐这样做，因为该限制可以防止节点的恶意过载。\n重新启动 wings 和你的游戏服务器以应用新的限制。")]),t._v(" "),a("h3",{attrs:{id:"使用示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-3"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_pid_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("h2",{attrs:{id:"流量限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量限制"}},[t._v("#")]),t._v(" 流量限制")]),t._v(" "),a("p",[t._v("您可以使用以下设置来设置流量限制")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("设置内容")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("是否启用流量限制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("lines")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2000")]),t._v(" "),a("td",[t._v("给定时间内可输出的总行数,达到上限将调用 line_reset_interval")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maximum_trigger_count")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",[t._v("在服务器停止之前可触发限制的次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("line_reset_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",[t._v("重置行数时间(可为0)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("decay_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10000")]),t._v(" "),a("td",[t._v("在不触发限制的情况下等待的时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("stop_grace_period")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),a("td",[t._v("如果服务器触发限制,则服务器在强制终止前可以停止的时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("write_limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",[t._v("对磁盘 I/O 的限制,设置0为无限,单位为 MiB/s")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("download_limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",[t._v("设置网络 I/O 限制,设置0为无限,单位为 MiB/s")])])])]),t._v(" "),a("h3",{attrs:{id:"使用示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-4"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("throttles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maximum_trigger_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("line_reset_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decay_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stop_grace_period")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n")])])]),a("h2",{attrs:{id:"安装限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装限制"}},[t._v("#")]),t._v(" 安装限制")]),t._v(" "),a("p",[t._v("设置安装程序容器限制可以帮助服务器安装时无意义的消耗资源,可以和服务器定义的限制一起使用,但在安装实例时会议最高值为基准")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("设置项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("memory")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1024")]),t._v(" "),a("td",[t._v("安装容器时可以使用的最大内存")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cpu")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",[t._v("安装容器时可以使用的最大 CPU 使用率")])])])]),t._v(" "),a("h3",{attrs:{id:"使用示例-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-5"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("installer_limits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),a("h2",{attrs:{id:"其他内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他内容"}},[t._v("#")]),t._v(" 其他内容")]),t._v(" "),a("p",[t._v("还有更多可以配置 Wings 的选项和说明 "),a("a",{attrs:{href:"https://github.com/pterodactyl-china/wings/tree/develop/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("您可点我查看"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("设置项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("debug")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("强制 Wings 在 Debug 模式运行")])]),t._v(" "),a("tr",[a("td",[t._v("tmpfs_size")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",[t._v("挂载实例到 "),a("code",[t._v("/tmp")]),t._v(" 目录的大小限制")])]),t._v(" "),a("tr",[a("td",[t._v("websocket_log_count")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("150")]),t._v(" "),a("td",[t._v("在控制台中显示的行数")])]),t._v(" "),a("tr",[a("td",[t._v("detect_clean_exit_as_crash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("如果服务器没有在交互的情况下意外停止将会标记为已崩溃")])]),t._v(" "),a("tr",[a("td",[t._v("(crash detection) timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("60")]),t._v(" "),a("td",[t._v("服务器崩溃自动重启持续时间")])]),t._v(" "),a("tr",[a("td",[t._v("app_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"Pterodactyl"')]),t._v(" "),a("td",[t._v("更改Wings的名称,该项将会显示在面板的控制台中")])]),t._v(" "),a("tr",[a("td",[t._v("check_permissions_on_boot")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",[t._v("每次启动时将会检查所有文件的权限,如果您的服务器文件过多请禁用!")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);