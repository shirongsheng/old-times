(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{483:function(s,a,e){"use strict";e.r(a);var t=e(30),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"sdk安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk安装"}},[s._v("#")]),s._v(" SDK安装")]),s._v(" "),e("p",[s._v("通过go语言中文网下载go sdk,类似Java的jdk。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://studygolang.com/dl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("建议选择msi安装，自动配置环境变量。")]),s._v(" "),e("img",{attrs:{src:"/old-times/png/go/go_1.png"}}),s._v(" "),e("p",[s._v("安装完成后在cmd键入go version查看go版本。")]),s._v(" "),e("img",{attrs:{src:"/old-times/png/go/go_2.png"}}),s._v(" "),e("h2",{attrs:{id:"开发工具安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发工具安装"}},[s._v("#")]),s._v(" 开发工具安装")]),s._v(" "),e("p",[s._v("开发工具选择goland，官网下载，开始选择的是2021.3.3，找不到怎么试用，选择了下面的2019.2.3版本的。")]),s._v(" "),e("p",[s._v("以下地址是破解教程。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://c.biancheng.net/view/6124.html\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("破解软件下载")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("链接：https://pan.baidu.com/s/1joXn27BPWv6f3erwUfL_sg \n提取码：5t31\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("img",{attrs:{src:"/old-times/png/go/go_3.png"}}),s._v(" "),e("p",[s._v("1、将jetbrains-agent.jar放入到goland安装目录的bin下，防止误删。")]),s._v(" "),e("p",[s._v("修改bin目录下的goland.exe.vmoptions和goland64.exe.vmoptions文件，\n在末尾追加-javaagent:(jetbrains-agent.jar文件所在目录)。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-javaagent:E:\\devSoft\\go\\GoLand 2019.2.3\\bin\\jetbrains-agent.jar\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("保存后重启goland，输入下载的激活码即可激活。")]),s._v(" "),e("h2",{attrs:{id:"hello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[s._v("#")]),s._v(" Hello World")]),s._v(" "),e("p",[s._v("使用2019.2.3版本的goland，1.17.6的go sdk，配置goroot报错如下。")]),s._v(" "),e("img",{attrs:{src:"/old-times/png/go/go_4.png"}}),s._v(" "),e("p",[s._v("在go sdk安装目录下找到go1.17.6\\src\\runtime\\internal\\sys\\zversion.go文件并编辑。")]),s._v(" "),e("p",[s._v("追加const TheVersion = "),e("code",[s._v("go1.17.6")]),s._v("在文件中，版本需要是自己sdk的版本。")]),s._v(" "),e("p",[s._v("保存后重启goland，即可识别goroot。")]),s._v(" "),e("h4",{attrs:{id:"gopath配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gopath配置"}},[s._v("#")]),s._v(" gopath配置")]),s._v(" "),e("img",{attrs:{src:"/old-times/png/go/gopath.png"}}),s._v(" "),e("h4",{attrs:{id:"edit-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-configurations"}},[s._v("#")]),s._v(" edit configurations")]),s._v(" "),e("p",[s._v("暂无")]),s._v(" "),e("p",[s._v("编写如下代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package test\n\nimport "fmt"\n\nfunc main(){\n\tfmt.Println("hello world!")\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("报错如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("go: go.mod file not found in current directory or any parent directory； see ‘go help modules‘\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("cmd 查看 go env  go module未开启。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set GO111MODULE=\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("go module是go官方自带的go依赖管理库,在1.13版本正式推荐使用")]),s._v(" "),e("p",[s._v("go module可以将某个项目(文件夹)下的所有依赖整理成一个 go.mod 文件,里面写入了依赖的版本等")]),s._v(" "),e("p",[s._v("使用go module之后我们可不用将代码放置在src下了")]),s._v(" "),e("p",[s._v("使用 go module 管理依赖后会在项目根目录下生成两个文件 go.mod 和 go.sum。")]),s._v(" "),e("p",[s._v("命令行输入以下命令即可。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("go env -w GO111MODULE=auto\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("之后报错")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Error running \'go build test\': Cannot run program "E:\\devSoft\\go\\workspace_go\\hello\\bin\\go_build_test.exe" (in directory "E:\\devSoft\\go\\workspace_go\\hello\\src\\test"): CreateProcess error=216, 该版本的 %1 与你运行的 Windows 版本不兼容。请查看计算机的系统信息，然后联系软件发布者。\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将上述代码改为以下即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("package main\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("输入如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hello world!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);