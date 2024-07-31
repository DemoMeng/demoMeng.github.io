(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{447:function(e,r,a){"use strict";a.r(r);var t=a(54),c=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[a("code",[e._v("https://mp.weixin.qq.com/s/1ad5lEdMEpzDS-zSF4ziRQ")])]),e._v(" "),a("p",[a("code",[e._v("lsof (List Open Files) 插件下载：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-lsof插件下载.jpg"}},[a("img",{attrs:{src:"docker-lsof%E6%8F%92%E4%BB%B6%E4%B8%8B%E8%BD%BD.jpg",alt:"lsof插件下载"}})])]),e._v(" "),a("p",[a("code",[e._v("docker服务器启动：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-服务启动.jpg"}},[a("img",{attrs:{src:"docker-%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8.jpg",alt:"docker服务启动"}})])]),e._v(" "),a("p",[a("code",[e._v("docker查看版本信息：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-查看版本.jpg"}},[a("img",{attrs:{src:"docker-%E6%9F%A5%E7%9C%8B%E7%89%88%E6%9C%AC.jpg",alt:"docker查看版本"}})])]),e._v(" "),a("p",[a("code",[e._v("镜像搜索并下载：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-镜像搜索下载.jpg"}},[a("img",{attrs:{src:"docker-%E9%95%9C%E5%83%8F%E6%90%9C%E7%B4%A2%E4%B8%8B%E8%BD%BD.jpg",alt:"docker镜像搜索下载"}})])]),e._v(" "),a("p",[a("code",[e._v("docker容器启动： docker run -d -p 3306:3306 --name Mysql mysql")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-容器启动.jpg"}},[a("img",{attrs:{src:"docker-%E5%AE%B9%E5%99%A8%E5%90%AF%E5%8A%A8.jpg",alt:"docker容器启动"}})])]),e._v(" "),a("p",[a("code",[e._v("docker删除镜像：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-删除镜像.jpg"}},[a("img",{attrs:{src:"docker-%E5%88%A0%E9%99%A4%E9%95%9C%E5%83%8F.jpg",alt:"docker删除镜像"}})])]),e._v(" "),a("p",[a("code",[e._v("docker容器信息 ： docker inspect 容器ID")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-查看容器信息.jpg"}},[a("img",{attrs:{src:"docker-%E6%9F%A5%E7%9C%8B%E5%AE%B9%E5%99%A8%E4%BF%A1%E6%81%AF.jpg",alt:"docker查看容器信息"}})])]),e._v(" "),a("h3",{attrs:{id:"【把项目部署到docker中-把springboot项目部署到docker中-】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【把项目部署到docker中-把springboot项目部署到docker中-】"}},[e._v("#")]),e._v(" 【把项目部署到docker中（把SpringBoot项目部署到Docker中）】")]),e._v(" "),a("p",[a("code",[e._v("1.创建SpringBoot项目，并且编译成可执行的jar包，并且把该jar放到服务器的某个文件夹下：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-jar部署docker-编译项目成jar.jpg"}},[a("img",{attrs:{src:"docker-jar%E9%83%A8%E7%BD%B2docker-%E7%BC%96%E8%AF%91%E9%A1%B9%E7%9B%AE%E6%88%90jar.jpg",alt:"docker编译项目成jar"}})])]),e._v(" "),a("p",[a("code",[e._v("2.配置Dockerfile文件。（该Dockerfile文件要和jar在相同的目录下）：")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-jar部署docker-配置Dockerfile文件.jpg"}},[a("img",{attrs:{src:"docker-jar%E9%83%A8%E7%BD%B2docker-%E9%85%8D%E7%BD%AEDockerfile%E6%96%87%E4%BB%B6.jpg",alt:"docker配置Dockerfile文件"}})])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Dockerfile文件配置释义：\n     VOLUME 指定了临时文件目录为/tmp。其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp。\n     改步骤是可选的，如果涉及到文件系统的应用就很有必要了。/tmp目录用来持久化到 Docker 数据文件夹，因为 Spring Boot 使用的内嵌 Tomcat 容器默认使用/tmp作为工作目录\n     项目的 jar 文件作为 “app.jar” 添加到容器的\n     ENTRYPOINT 执行项目 app.jar。为了缩短 Tomcat 启动时间，添加一个系统属性指向 “/dev/./urandom” 作为 Entropy Source\n")])])]),a("p",[a("code",[e._v("3.制作jar的镜像文件，执行 docker build -t docker-sb . (-t 是设置制作镜像的名字，注意该命令最后还有一个点)")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-jar部署docker-制作jar的镜像文件.jpg"}},[a("img",{attrs:{src:"docker-jar%E9%83%A8%E7%BD%B2docker-%E5%88%B6%E4%BD%9Cjar%E7%9A%84%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.jpg",alt:"docker制作jar镜像文件"}})])]),e._v(" "),a("p",[a("code",[e._v("4.根据镜像名称，制作容器并且启动")]),e._v(" "),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-jar部署docker-启动容器.jpg"}},[a("img",{attrs:{src:"docker-jar%E9%83%A8%E7%BD%B2docker-%E5%90%AF%E5%8A%A8%E5%AE%B9%E5%99%A8.jpg",alt:"docker启动容器"}})])]),e._v(" "),a("p",[a("code",[e._v("5.容器启动成功，可以通过web浏览器访问到程序")])]),e._v(" "),a("h3",{attrs:{id:"查看docker容器启动信息-容器启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看docker容器启动信息-容器启动命令"}},[e._v("#")]),e._v(" 查看Docker容器启动信息-容器启动命令")]),e._v(" "),a("p",[e._v("安装相关组件：")]),e._v(" "),a("ul",[a("li",[e._v("1：yum install -y python-pip")]),e._v(" "),a("li",[e._v("2：pip install runlike")]),e._v(" "),a("li",[e._v("3：执行 runlike -p 容器id\n"),a("a",{attrs:{"data-fancybox":"",title:"111",href:"查看docker启动信息.jpg"}},[a("img",{attrs:{src:"%E6%9F%A5%E7%9C%8Bdocker%E5%90%AF%E5%8A%A8%E4%BF%A1%E6%81%AF.jpg",alt:"查看docker启动信息"}})])])]),e._v(" "),a("h3",{attrs:{id:"安装runlike-导出容器启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装runlike-导出容器启动命令"}},[e._v("#")]),e._v(" 安装runlike 导出容器启动命令")]),e._v(" "),a("p",[e._v("上面是使用 pip安装runlike，可以使用docker容器启动runlike，并且设置容器别名，这样可以直接使用")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker pull assaflavie/runlike:latest\nalias runlike="docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike"\nrunlike -p 容器id\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("a",{attrs:{"data-fancybox":"",title:"111",href:"安装runlike-导出容器启动命令.png"}},[a("img",{attrs:{src:"%E5%AE%89%E8%A3%85runlike-%E5%AF%BC%E5%87%BA%E5%AE%B9%E5%99%A8%E5%90%AF%E5%8A%A8%E5%91%BD%E4%BB%A4.png",alt:"img.png"}})])]),e._v(" "),a("h3",{attrs:{id:"安装whaler-导出容器-dockerfile-分析镜像的dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装whaler-导出容器-dockerfile-分析镜像的dockerfile"}},[e._v("#")]),e._v(" 安装whaler，导出容器 Dockerfile (分析镜像的Dockerfile)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker pull pegleg/whaler:latest\nalias whaler="docker run -t --rm -v /var/run/docker.sock:/var/run/docker.sock:ro pegleg/whaler"\nwhaler 镜像id\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("a",{attrs:{"data-fancybox":"",title:"111",href:"whaler分析镜像的Dockerfile.png"}},[a("img",{attrs:{src:"whaler%E5%88%86%E6%9E%90%E9%95%9C%E5%83%8F%E7%9A%84Dockerfile.png",alt:"img.png"}})])]),e._v(" "),a("h3",{attrs:{id:"什么是linux容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是linux容器"}},[e._v("#")]),e._v(" 什么是Linux容器：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("容器：")]),e._v(" "),a("p",[a("code",[e._v("镜像包含所有的依赖项，因而从开发到测试再到生产的过程中，它具有可以移植性和一致性。")])]),e._v(" "),a("p",[a("code",[e._v("你的开发环境有独特的配置，其他开发人员身处的环境配置可能稍有不同，并且你的电脑依赖于某些特定的文件。")])]),e._v(" "),a("p",[a("code",[e._v("你的企业拥有标准化的测试和生产环境，且具有自身的配置和一系列支持文件。")])]),e._v(" "),a("p",[a("code",[e._v("你希望尽可能多在本地模拟这些环境，而不产生重新创建服务器环境的开销")])])]),e._v(" "),a("li",[a("p",[e._v("docker定义：")]),e._v(" "),a("p",[a("code",[e._v("容器化技术，用于支持创建和使用 Linux 容器")])])]),e._v(" "),a("li",[a("p",[e._v("docker生命周期：\n"),a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker生命周期.jpg"}},[a("img",{attrs:{src:"docker%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.jpg",alt:"docker生命周期器"}})])])]),e._v(" "),a("li",[a("p",[e._v("docker相关指令：")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n    `docker images list : 查看本机镜像`\n    `docker search nginx : 搜索官方镜像仓库`\n    `docker pull index.tenxcloud.com/tenxcloud/httpd： 拉取第三方镜像仓库的镜像（阿里云、腾讯的镜像仓库）`\n\n    `docker image save 镜像Id或者镜像名 > /usr/export-image-rabbitmq.tar.gz : 导出镜像`\n    `docker image load -i /usr/export-image-rabbitmq.tar.gz : 加载镜像`\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker导出导入镜像.jpg"}},[a("img",{attrs:{src:"docker%E5%AF%BC%E5%87%BA%E5%AF%BC%E5%85%A5%E9%95%9C%E5%83%8F.jpg",alt:"docker导入导出镜像"}})])]),e._v(" "),a("h3",{attrs:{id:"docker-swarm-容器集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm-容器集群"}},[e._v("#")]),e._v(" docker swarm 容器集群：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("`` 查看具体的docker swarm使用步骤 ``\n``https://mp.weixin.qq.com/s/1ad5lEdMEpzDS-zSF4ziRQ``\n")])])]),a("p",[e._v("docker swarm 集群部署docker : 发布新的服务\ndocker stack deploy -c fxq-moudle-cluster.yml --with-registry-auth fxq_moudle")]),e._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"111",href:"docker容器集群-1.jpg"}},[a("img",{attrs:{src:"docker%E5%AE%B9%E5%99%A8%E9%9B%86%E7%BE%A4-1.jpg",alt:"docker容器集群-查看所有服务、查看集群节点"}})])]),e._v(" "),a("h3",{attrs:{id:"容器编排-docker-compose-和-docker-swarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器编排-docker-compose-和-docker-swarm"}},[e._v("#")]),e._v(" 容器编排： docker compose 和 docker swarm")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("二者都是docker官方提供的容器编排的项目，但是：\n    docker compose ： 解决的是在同一台服务器/主机上部署多个容器的工具\n    docker swarm ： 解决的是在多台服务器/主机上部署多个容器集群\n")])])]),a("ul",[a("li",[a("p",[e._v("docker 、 docker compose 、 docker swarm")]),e._v(" "),a("p",[e._v("docker : "),a("code",[e._v("docker是容器引擎，最终的容器均需要Dockerfile文件构建出来，它是容器的基础。")])]),e._v(" "),a("p",[e._v("docker compose : "),a("code",[e._v("是一款容器编排工具，编写docker-compose.yml把当前服务器、主机的服务构建、启动（docker-compose up）、暂停等操作。 所以docker compose只能管理当前的服务器、主机上的容器（如果需要管理不同服务器、主机上的docker需要使用docker swarm）。")])]),e._v(" "),a("p",[e._v("docker swarm : "),a("code",[e._v("是用于管理多个服务器上的容器，其界面化工具为：Portainer。可用于启动容器，监控容器状态（如果容器的状态不正常会自定构建一个新的容器服务）， 同时提供各个容器服务的负载均衡。这些是docker compose不具备的。")])])])]),e._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("查看yum安装的软件")]),e._v(" "),a("ul",[a("li",[e._v("yum list installed | grep docker: 查看docker通过yum安装的所有包")])])]),e._v(" "),a("li",[a("p",[e._v("docker compose —>  命令不存在：")]),e._v(" "),a("ul",[a("li",[e._v("centos 7中python-pip模块不存在，是因为像centos这类衍生的发行版，源跟新滞后，或者不存在。即使使用yum去search python-pip也找不到软件包。")]),e._v(" "),a("li",[e._v("为了使用安装滞后或源中不存在的安装包，需要安装扩展源EPEL。")]),e._v(" "),a("li",[e._v("扩展源EPEL(http://fedoraproject.org/wiki/EPEL) 是由 Fedora 社区打造，为 RHEL 及衍生发行版如 CentOS、Scientific Linux 等提供高质量软件包的项目。")]),e._v(" "),a("li",[e._v("安装扩展源：sudo yum -y install epel-release")]),e._v(" "),a("li",[e._v("安装python-pip模块：sudo yum install python-pip")]),e._v(" "),a("li",[e._v("此时执行 docker-compose version 命令可能会会出现命令不存在的问题，以下给出解决方案：")])])]),e._v(" "),a("li",[a("p",[e._v("docker compo安装步骤")]),e._v(" "),a("ul",[a("li",[e._v("cd /usr/local/bin/")]),e._v(" "),a("li",[e._v("wget https://github.com/docker/compose/releases/download/1.14.0-rc2/docker-compose-Linux-x86_64")]),e._v(" "),a("li",[e._v("rename docker-compose-Linux-x86_64 docker-compose docker-compose-Linux-x86_64")]),e._v(" "),a("li",[e._v("chmod +x /usr/local/bin/docker-compose")])])])])])}),[],!1,null,null,null);r.default=c.exports}}]);