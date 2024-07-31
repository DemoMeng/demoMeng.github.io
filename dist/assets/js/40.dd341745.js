(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{429:function(s,n,a){"use strict";a.r(n);var e=a(54),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"分布式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统"}},[s._v("#")]),s._v(" 分布式系统")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"111",href:"qingwang技术结构.jpg"}},[a("img",{attrs:{src:"qingwang%E6%8A%80%E6%9C%AF%E7%BB%93%E6%9E%84.jpg",alt:"qingwang技术结构"}})])]),s._v(" "),a("h2",{attrs:{id:"web项目架构的演变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web项目架构的演变"}},[s._v("#")]),s._v(" web项目架构的演变")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.单一应用架构\n    网站流量很小，将所有的功能都部署在一起，减少部署节点和成本，此时，用于简化增删改查工作量时候数据库访问框架ORM是关键\n2.垂直应用架构\n    访问量增大，对应用进行划分成不同的接个应用，此时，用于加速前端页面开发的web框架MVC是关键\n3.分布式服务架构\n    当垂直应用越来越多，应用之间的交互不可避免，将核心的业务抽离出来，作为独立的服务，逐渐形成稳定的服务中心，使前端应用能\n    更快的响应多变的市场需求，此时，用于调高业务复用及整合的分布式服务框架RPC是关键\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("在说集群之前首先要了解一下web项目架构的演变史。\n1：ORM/MVC\n        传统的项目体量小，orm框架是完全适用的，也就是使用servlet、jsp的技术（尚未实现前后端分离）\n    进而引入了MVC架构方式，实现模块划分（业务层，控制层，视图层）也就是垂直的架构方式（Vertical Application）实现\n    了前后端分离，这样更有利于开发和维护\n2：RPC架构\n        随着业务的增多，项目变得臃肿，一台服务器无法支撑起成千上万的请求，所以出现了RPC的架构方式。RPC方式采用了对项目进行合理\n    拆分，分别放入多台服务器中。服务器之间的项目通信通过远程调用（Remote Process Call）方式实现。\n        a.服务提供者\n        b.服务中心\n        c.服务消费者\n    \n3：SOA架构\n        业务量渐渐增加，各个服务之间通信也越来越多，依赖也越来越多，越来越变得混乱。给开发带来了困难。SOA架构将所有的服务集中进行管理，\n    加入一个服务注册和发现中心，谁需要发布服务就来服务注册中心注册，谁要依赖服务，就来注册中心请求。\n    \n集群：\n        一组计算机系统构成多处理系统，他们是松散耦合的关系，并且通过网络实现进程间的通信，应用程序是可以通过网络共享内存进行消息传送，实现分布式\n    计算机，也就是说让多台计算机联合起来进行工作，可以是并行的也可以是备份。\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断"}},[s._v("#")]),s._v(" 熔断")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    熔断：\n        1.在分布式系统中，多个系统之间存在相互调用的情况，可能因为某些额外的问题导致系统无法正常返回，这样就影响了调用这个系统的其他系统，进而会影响其他以上的系统。从而出现系统的雪崩。\n        2.其实，在分布式系统中，为了保证整体服务可用性和一致性，很多系统都会引入重试机制，在有些情况下，重试其实是可以解决问题的，比如网络问题等，都可以通过重试来解决。\n    熔断器模式：\n        1.用以侦测错误，并避免不断地触发相同的错误（如维护时服务不可用、暂时性的系统问题或是未知的系统错误）。\n        2.也就是说，熔断器，会检测以及预防，防止应用程序不断重试调用一个近乎毫无回应的服务。\n        3.熔断器模式是防止微服务系统雪崩的一个重要手段。\n    熔断器框架：\n        如Hystrix和Sentinel、resilience4j等。\n    \n        https://mmbiz.qpic.cn/mmbiz_jpg/C1uDMDqjn1ic7OCg5bDfQKicsY44CFgFicmEia0mgXGnMdKl7nYXeiblCONhibAYToKIk7Ot06ny26LNSUDAWFttkaFQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"如何处理高并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何处理高并发"}},[s._v("#")]),s._v(" 如何处理高并发")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"111",href:"高并发处理思路.jpg"}},[a("img",{attrs:{src:"%E9%AB%98%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86%E6%80%9D%E8%B7%AF.jpg",alt:"详情"}})])]),s._v(" "),a("ul",[a("li",[s._v("分布式系统可能带来的问题-多节点下，如何保证事务一致性？")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    1.采用消息队列的方式\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"分布式和集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式和集群"}},[s._v("#")]),s._v(" 分布式和集群")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("分布式：不同的功能的服务，并且每个服务之间存在通信\n      从单机结构到集群结构，你的代码基本无需要作任何修改，你要做的仅仅是多部署几台服务器，每台服务器上运行相同的代码就行了。\n      但是，当你要从集群结构演进到微服务结构的时候，之前的那套代码就需要发生较大的改动了。\n      所以对于新系统我们建议，系统设计之初就采用微服务架构，这样后期运维的成本更低。\n      但如果一套老系统需要升级成微服务结构的话，那就得对代码大动干戈了。\n      所以，对于老系统而言，究竟是继续保持集群模式，还是升级成微服务架构，这需要你们的架构师深思熟虑、权衡投入产出比。\n      \n      分布式结构就是将一个完整的系统，按照业务功能，拆分成一个个独立的子系统，在分布式结构中，每个子系统就被称为“服务”。\n      这些子系统能够独立运行在web容器中，它们之间通过RPC（Remote Process Call）方式通信。\n      \n      举个例子，假设需要开发一个在线商城。按照微服务的思想，我们需要按照功能模块拆分成多个独立的服务，\n      如：用户服务、产品服务、订单服务、后台管理服务、数据分析服务等等。\n      这一个个服务都是一个个独立的项目，可以独立运行。如果服务之间有依赖关系，那么通过RPC方式调用。\n      \n      这样的好处有很多：\n      \n      1.系统之间的耦合度大大降低，可以独立开发、独立部署、独立测试，系统与系统之间的边界非常明确，排错也变得相当容易，开发效率大大提升。\n        系统之间的耦合度降低，从而系统更易于扩展。我们可以针对性地扩展某些服务。\n      2.假设这个商城要搞一次大促，下单量可能会大大提升，因此我们可以针对性地提升订单系统、产品系统的节点数量，而对于后台管理系统、数据分析系统而言，节点数量维持原有水平即可。\n      3.服务的复用性更高。比如，当我们将用户系统作为单独的服务后，该公司所有的产品都可以使用该系统作为用户系统，无需重复开发。\n\n集群：相同功能的服务拥有多个节点组合在一起\n     集群中每台服务器就叫做这个集群的一个“节点”，所有节点构成了一个集群。每个节点都提供相同的服务\n     但问题是用户的请求究竟由哪个节点来处理呢？最好能够让此时此刻负载较小的节点来处理，这样使得每个节点的压力都比较平均。\n     要实现这个功能，就需要在所有节点之前增加一个“调度者”的角色，用户的所有请求都先交给它，然后它根据当前所有节点的负载情况，\n     决定将这个请求交给哪个节点处理。这个“调度者”有个牛逼了名字——负载均衡服务器。\n     \n     集群结构的好处就是系统扩展非常容易。如果随着你们系统业务的发展，当前的系统又支撑不住了，那么给这个集群再增加节点就行了。\n     但是，当你的业务发展到一定程度的时候，你会发现一个问题——无论怎么增加节点，貌似整个集群性能的提升效果并不明显了。\n     这时候，你就需要使用微服务结构了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"高可用指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用指标"}},[s._v("#")]),s._v(" 高可用指标")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1. 吞吐量\n   吞吐量：吞吐量指的是一个系统的抗压和负载的能力，代表系统最大能承受用户的访问量。一个系统的吞吐量通常由QPS（TPS）、并发数来决定。\n           每个系统对这两个值都有一个相对的极限值限制，只要一个其中一个值到达最大值，系统的吞吐量就上不去了。\n2. QPS\n   Queries Per Second：每秒查询量。即是每秒响应请求数，这里指的是用户发起请求到服务器做出响应成功的次数，简单理解为查询=request请求。\n   QPS = 每秒Request量 （成功reques，并且服务器做出成功响应）\n3. TPS\n   Transactions Per Second : 每秒处理的事务量。这里的一个事务指的是：一个客户机向服务器发送请求然后服务器做出反应的过程，客户机在发起请求时开始计时\n                              收到服务器响应时结束计时，以此来计算使用时间和完成的事务个数。\n   针对单接口而言，TPS可以认为是等价于QPS。\n   TPS = 每秒处理的事务量\n4. RT\n    Response Time : 简单理解为输入到输出的时间间隔。一般来说代表客户端从发起请求，到服务器接受并响应所有数据的时间差。一般取平均响应时间。\n5. 并发数\n    系统能同时处理的请求/事务数量。\n    \n    并发数 = QPS * 单个QPS耗时 \n        高QPS、低延时系统是一个极优的系统\n6. 他们之间的关系\n    计算方式：\n        QPS = 并发数/RT \n        或者\n        并发数 = QPS*RT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"集群-负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群-负载均衡策略"}},[s._v("#")]),s._v(" 集群-负载均衡策略")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("分类：\n    1.HTTP页面重定向负载均衡\n    2.DND域名解析负载均衡\n    3.反向代理负载均衡\n    \n策略：\n    1.轮询\n    2.加权轮询\n    3.最少连接数\n    4.最快响应\n    5.Hash法    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"业务表的读写如何优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务表的读写如何优化"}},[s._v("#")]),s._v(" 业务表的读写如何优化")])])}),[],!1,null,null,null);n.default=t.exports}}]);