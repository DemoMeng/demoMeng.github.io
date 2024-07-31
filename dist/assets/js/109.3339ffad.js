(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{498:function(s,e,n){"use strict";n.r(e);var a=n(54),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"spring依赖注入有几种方式-各自优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring依赖注入有几种方式-各自优缺点"}},[s._v("#")]),s._v(" Spring依赖注入有几种方式，各自优缺点")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" 属性注入 (Field Injection)\n setter方法注入 (Setter Injection)\n 构造函数注入 (Constructor Injection)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("属性注入")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    @Autowired \n    private UserService userService;\n   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("优点 ：使用简单，只需要加入注解（@Autowired），在不用new对象的情况下就能获取spring的注入对象（Spring的DI特性及功能）")]),s._v(" "),n("li",[s._v("缺点 ：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  1. 无法注入一个不可变的对象（final对象） \n        如果需要注入一个final对象，适用构造函数注入即可\n  2. 只能适用于IOC容器 \n  3. 容易违背了单一设计原则\n        属性注入的简单性，容易在一个类中注入多个对象，而这些对象是否有注入的必要？这些对象是否符合程序设计中的单一职责原则，就变成了\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("setter方法注入")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    private UserService userService;\n    \n    @Autowired\n    public void setUserService(UserService userService) {\n        this.userService = userService;\n    }\n    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ol",[n("li",[s._v("不能注入不可变对象（final 修饰的对象）；")]),s._v(" "),n("li",[s._v("注入的对象可被修改。\n注入的对象可以在setter方法中改变注入的对象，所以setter的缺点问题是，被注入的对象可能随时被修改掉。")])]),s._v(" "),n("ul",[n("li",[s._v("构造函数注入 Spring官方4.x之后推荐的方式")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@RestController\npublic class UserController {\n\n    private UserService userService;\n\n    // 构造方法注入\n    // 如果当前的类中只有一个构造方法，那么 @Autowired 也可以省略\n    @Autowired\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n    \n}    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ol",[n("li",[s._v("可注入不可变对象；")]),s._v(" "),n("li",[s._v("注入对象不会被修改；\n构造方法在对象创建时只会执行一次，因此它不存在注入对象被随时（调用）修改的情况。")]),s._v(" "),n("li",[s._v("注入对象会被完全初始化；\n而构造方法是在对象创建之初执行的，因此被注入的对象在使用之前，会被完全初始化，这也是构造方法注入的优点之一")]),s._v(" "),n("li",[s._v("通用性更好。\n构造方法和属性注入不同，构造方法注入可适用于任何环境，无论是 IoC 框架还是非 IoC 框架，构造方法注入的代码都是通用的，所以它的通用性更好。")])]),s._v(" "),n("h2",{attrs:{id:"autowired-和-resource的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#autowired-和-resource的区别"}},[s._v("#")]),s._v(" @Autowired 和 @Resource的区别")]),s._v(" "),n("ul",[n("li",[s._v("来源不同")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Autowired 是 Spring定义的注解\n@Resource 是 Java定义的注解，来自JSR-250规范提案\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("查找顺序不同")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("一来注入的功能，是通过先在 Spring的 IOC 容器中查找对象，再将对象引入到当前类。\n而查找对象分为两种方式： 按照名字查找、按照类型查找。\n@Resource 和 @Autowired 都使用了按名字查找、按类型查找的方式，但是二者查找的顺序不大相同\n\n\n@Resource 先按名称查找，若名称查找不到，再按类型查找\n\n@Autowired 先按照类型查找，若找出了多个，再根据名称查找\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ul",[n("li",[s._v("支持的参数不同")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Resource \n    参数\n        name\n        lookup\n        type\n        authenticationType\n        shareable\n        mappedName\n        description\n        \n@Autowired\n    参数\n        required         \n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("依赖注入的方式不同")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Resource\n    只能支持属性注入、setter方法注入\n\n@Autowired 三种注入方式都支持\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("编译器idea的提示不同")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("当注入 Mapper 对象时，使用 @Autowired 注解编译器会提示错误，而使用 @Resource 注解则不会提示错误。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"spring中bean的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring中bean的生命周期"}},[s._v("#")]),s._v(" Spring中Bean的生命周期")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"111",href:"spring的bean的生命周期.png"}},[n("img",{attrs:{src:"spring%E7%9A%84bean%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png",alt:"img.png"}})])]),s._v(" "),n("ol",[n("li",[s._v("实例化: 为Bean分配内存空间")]),s._v(" "),n("li",[s._v("设置属性： 将当前类以来的 Bean 属性，进行注入和装配")]),s._v(" "),n("li",[s._v("初始化：\na. 执行各种通知\nb. 执行初始化的前置方法\nc. 执行初始化方法\nd. 执行初始化的后置方法")]),s._v(" "),n("li",[s._v("使用 Bean : 在程序中使用 Bean对象")]),s._v(" "),n("li",[s._v("销毁 Bean : 程序结束，对 Bean对象进行销毁操作")])]),s._v(" "),n("h2",{attrs:{id:"接口优化总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口优化总结"}},[s._v("#")]),s._v(" 接口优化总结")]),s._v(" "),n("p",[s._v("需要for查询数据库的操作，可以使用一次性查询出来")]),s._v(" "),n("ol",[n("li",[s._v("批量操作数据库 ：避免for循环里面进行数据库的操作，尽量只操作一次数据库，当作数组参数传入操作数据库\n优化前：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//for循环单笔入库\nfor(TransDetail detail:transDetailList){\n  insert(detail);  \n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("优化后：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("batchInsert(transDetailList);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("异步思想： 耗时操作、非需要串行的操作，考虑放到（队列、多线程）里执行")])]),s._v(" "),n("li",[n("p",[s._v("缓存思想： 常用的大量数据放到redis里缓存，比如：地区数据、")])]),s._v(" "),n("li",[n("p",[s._v("预取思想： 就是提前把要计算查询的数据，初始化到缓存中，如果在未来的某个时间需要用到这些数据，再去数据库查询的话，\n可能耗时比较大，这个时候可以使用预取思想，提前把将来可能需要的数据计算好，放到缓存中。\n比如： 提前把直播间用户的积分数据、用户相关数据初始化到缓存中")])]),s._v(" "),n("li",[n("p",[s._v("池化思想： 在使用多线程中，我们需要尽量使用线程池来操作，因为线程池帮助我们管理了线程，避免增加创建线程和销毁线程而造成了资源损耗\n线程池可以对线程进行复用，避免不必要的耗时操作、资源浪费。池化思想不仅仅指线程池，很多场景都有池化思想的体现，比如：Druid （数据库连接池）\n它的本质就是预分配和循环利用资源")])]),s._v(" "),n("li",[n("p",[s._v("拒绝阻塞等待，使用事件回调思想： 如果A系统需要调用B系统，但是B系统处理的业务逻辑耗时非常长，若A系统调用B系统的话容易长时间等待，导致A系统长时间下不可用，\n此时可以考虑IO多路复用模型，即A系统不用等待阻塞你的B系统，可以去处理其他的逻辑，等B系统处理完成后，回调通知A系统，这样A系统收到\n回调后可以处理对应的逻辑。")])]),s._v(" "),n("li",[n("p",[s._v("远程调用将串行改为并行： 这点和异步思想类似。")])]),s._v(" "),n("li",[n("p",[s._v("锁的颗粒度避免过粗：")])]),s._v(" "),n("li",[n("p",[s._v("大事务问题： 由于运行长时间的事务，由于事务一直没有提交，导致数据库连接被占用，即并发场景下，数据库连接池被占满，影响到了性能。")])])]),s._v(" "),n("p",[s._v("解决方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 事务里面不要放和事务无关的代码：比如RPC操作、查询操作\n2. 事务中尽量避免处理太多的数据            \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"如何实现一个用户一天内只能登录3次"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个用户一天内只能登录3次"}},[s._v("#")]),s._v(" 如何实现一个用户一天内只能登录3次 ？")]),s._v(" "),n("ol",[n("li",[s._v("redis 的 set或者hset数据结构： set是无序不能重复的 ！！")])]),s._v(" "),n("h2",{attrs:{id:"mysql的btree索引和hash索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql的btree索引和hash索引"}},[s._v("#")]),s._v(" mysql的BTree索引和Hash索引")]),s._v(" "),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),n("p",[s._v("自我介绍下，有带队经验吗?")]),s._v(" "),n("p",[s._v("2, 数据结构。")]),s._v(" "),n("p",[s._v("3， 设计模式。")]),s._v(" "),n("p",[s._v("互联网协议\nRPC，HTTP， HTTPS")]),s._v(" "),n("p",[s._v("1, VO, TO, PO 一般怎么用\n锁的应用\n多线程")]),s._v(" "),n("h2",{attrs:{id:"redis的相关问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis的相关问题"}},[s._v("#")]),s._v(" Redis的相关问题")]),s._v(" "),n("h2",{attrs:{id:"redis使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis使用场景"}},[s._v("#")]),s._v(" Redis使用场景，")]),s._v(" "),n("h2",{attrs:{id:"redis的集群类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis的集群类型"}},[s._v("#")]),s._v(" Redis的集群类型，")]),s._v(" "),n("h2",{attrs:{id:"使用缓存一般会出现什么重大的问题-如何解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存一般会出现什么重大的问题-如何解决"}},[s._v("#")]),s._v(" 使用缓存一般会出现什么重大的问题，如何解决？")]),s._v(" "),n("ol",[n("li",[s._v("缓存雪崩： 缓存在同一个时间过期了，或者redis宕机，导致大量的请求达到数据库")]),s._v(" "),n("li",[s._v("缓存穿透： 查询缓存中没有、数据库中也没有的数据，一般是恶意攻击")]),s._v(" "),n("li",[s._v("缓存击穿： 缓存中不存在（key过期了），直接查询数据库了")])]),s._v(" "),n("p",[s._v("缓存雪崩解决：\nredis方面：\n1. 做redis高可用： redis主从+哨兵、 redis cluster集群\n2. 需要做业务缓存：比如 ehcache做缓存，避免只有redis一个缓存\n3. redis需要做持久化配置，redis宕机、崩溃后重启完数据还能恢复\n4. 限流：避免所有的请求都到达数据库\nkey在同一个时间过期：\n1. key的抖动设置，随机过期时间，避免在同一个时间大量过期")]),s._v(" "),n("p",[s._v("2， Spring相关问题\n依赖注入的几种方式？\nAOP的应用\n如果我需要往一个没有被Spring管理的Bean里引用一个Spring的bean，应该怎么做？")]),s._v(" "),n("p",[s._v("Spring的生命周期\nSpring的context保存的bean是用了什么数据结构或者哪个类")]),s._v(" "),n("p",[s._v("Springboot与tomcat是怎么集成的。\nServlet的Filter加入到内置的Tomcat应该如何做？")]),s._v(" "),n("p",[s._v("SpringMVC的Servlet分发器是什么？")]),s._v(" "),n("p",[s._v("Tomcat原理相关问题\nTomcat是如何处理请求的？\nTomcat与Apache的区别与联系")]),s._v(" "),n("p",[s._v("nginx相关问题\nnginx的负载均衡是怎么实现的？他是客户端负载均衡还是服务器端负载均衡\nnginx的集群配置")]),s._v(" "),n("p",[s._v("Mybatis相关问题\nMybatis的一级缓存与两级缓存，能说明一下么？\nMybatis的延迟加载的机制")]),s._v(" "),n("h2",{attrs:{id:"mybatis的sqlsession下的四大对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的sqlsession下的四大对象"}},[s._v("#")]),s._v(" mybatis的SqlSession下的四大对象")]),s._v(" "),n("p",[s._v("Executor: 负责执行调用下面的四个对象\nStatementHandler : sql的预编译、设置参数\nResultSetHandler : 结果集转换，把mybatis转换成java ： resultSet 转为 list\nParameterHandler : 参数转换、参数处理\nTypeHandler: 数据类型转换：把mysql的数据类型转换为java的数据类型")]),s._v(" "),n("p",[s._v("如果我需要自动转换int类型为枚举类型，应该从何入手")]),s._v(" "),n("p",[s._v("Mysql的索引用的是什么类型的数据结构？")]),s._v(" "),n("p",[s._v("Shiro相关问题\nShiro是如何在tomcat里实现认证与授权的？\n你对Jwt, Jws有了解么？ Oauth2有了解么？\n单点登录")]),s._v(" "),n("p",[s._v("dubbo的底层框架用的是什么？基于什么协议？\nCAP,BASE理论")]),s._v(" "),n("p",[s._v("前端相关问题\n你对前端框架有了解么？\nVue，")]),s._v(" "),n("p",[s._v("你现在做的项目实现难度最高的一个功能，讲解一下\n项目多节点场景通过redis保证数据一致的功能的开发")]),s._v(" "),n("p",[s._v("如果我需要查询快，又能一直都可以快速插入和删除，你会选择什么样的数据结构？")]),s._v(" "),n("p",[s._v("同步锁 的区别")]),s._v(" "),n("p",[s._v("TCP/IP属于网络七层协议里面的第几层，TCP协议报文数据格式可以分成简单几个部分？TCP的四次挥手请说明一下")]),s._v(" "),n("p",[s._v("源码问题\nSpring 三级缓存， 生命周期， Spring bean的注入方式？\nShiro源码")]),s._v(" "),n("p",[s._v("Spring cloud问题")]),s._v(" "),n("p",[s._v("Kafka 与 rabbitMQ")]),s._v(" "),n("p",[s._v("数据库\n我现在遇到了一个运行了很长时间的SQL，如果是你，你会考虑是哪几方面问题？从哪几方面入手优化？\n分布式数据库，分页你是如何处理的？主键你生成你用什么方案？\n我需要搭一个mysql的数据库集群，且需要分库分表，你的设想是怎么样？")]),s._v(" "),n("h2",{attrs:{id:"nginx的高可用方案与集群方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx的高可用方案与集群方案"}},[s._v("#")]),s._v(" Nginx的高可用方案与集群方案")]),s._v(" "),n("p",[s._v("KeepAlived + Nginx")]),s._v(" "),n("p",[s._v("分布式锁的概念与应用\n你用过Redis几大数据类型？都用在哪些场景？\nZookeeper基于什么协议？CAP理论，强一致性还是最终一致性？ZAB")]),s._v(" "),n("p",[s._v("1, 统一预约平台的限流方案处理\n2， 灰度环境是如何实现\n3， Oauth2的JWT， JWS 签名，安全性\n4， 重复调用的解决方案\n理解 JVM 底层原理， JMM 内存模型， 垃圾回收机制， GC 算法\n懂得 Linux 常用命令， 有 Linux 的相关运维经验")]),s._v(" "),n("p",[s._v("源码问题\nSpring 三级缓存， 生命周期， Spring bean的注入方式？")]),s._v(" "),n("h2",{attrs:{id:"你用过redis几大数据类型-都用在哪些场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#你用过redis几大数据类型-都用在哪些场景"}},[s._v("#")]),s._v(" 你用过Redis几大数据类型？都用在哪些场景？")]),s._v(" "),n("p",[s._v("String ：基本数据存储")]),s._v(" "),n("p",[s._v("set\\zset:\n一个用户24小时内不允许超过3次登录 、\n排行榜 、\n好友关系，白黑名单、点赞列表、互相关注列表")]),s._v(" "),n("p",[s._v("geo： 定位、周围的人")]),s._v(" "),n("p",[s._v("increment : 计数器 、 分布式id生成")]),s._v(" "),n("p",[s._v("其他 ：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("分布式锁： redlock 、 redissoin\n消息队列：发布订阅模式\n分布式会话： session \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"设计模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[s._v("#")]),s._v(" 设计模式")]),s._v(" "),n("p",[s._v("单例模式：\n策略模式：多供应商短信\n代理模式：事务、aop等\n门面模式：slf4j日志框架")]),s._v(" "),n("p",[s._v("适配器模式：\n责任链模式：")]),s._v(" "),n("p",[s._v("工厂方法模式\t\n抽象工厂模式：\n模版方法模式：\n建造者模式：\n原型模式：\n中介者模式：\n命令模式：\n装饰模式：")]),s._v(" "),n("p",[s._v("迭代器模式：\n组合模式：\n观察者模式：\n备忘录模式：\n访问者模式：\n状态模式：\n解释器模式：\n享元模式：\t\n桥梁模式：")]),s._v(" "),n("HideArticle")],1)}),[],!1,null,null,null);e.default=r.exports}}]);