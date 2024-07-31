(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{461:function(s,a,n){"use strict";n.r(a);var t=n(54),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"读写分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[s._v("#")]),s._v(" 读写分离")]),s._v(" "),n("h2",{attrs:{id:"mycat读写分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mycat读写分离"}},[s._v("#")]),s._v(" Mycat读写分离")]),s._v(" "),n("ul",[n("li",[s._v("环境准备：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    1. 需要安装java环境，配置JDK环境变量\n    2. 下载Mycat官方Server端软件包： Mycat-server-1.5.1-RELEASE-20161130213509-linux.tar.gz（linux服务器版）\n        可以按需下载对应的版本：   http://dl.mycat.org.cn/1.6.7.6/\n        官网： http://www.mycat.org.cn/\n    3. 安装mysql，配置好主从（冷备）环境！！！     \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("配置文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    1. schema.xml : 定义配置连接mysql的主机、端口、数据库，分片节点等\n    2. server.xml : 定义mycat的用户访问体系，mycat防火墙，mycat的端口等mycat系统配置\n    3. rule.xml :  定义分片规则\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("配置 server.xml")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mycat:server SYSTEM "server.dtd">\n<mycat:server xmlns:mycat="http://io.mycat/">\n\t<system>\n\t\t\x3c!-- mycat对外提供服务的端口--\x3e\n\t\t<property name="serverPort">3306</property>\n\t\t\x3c!-- mycat管理端口--\x3e\n\t\t<property name="managerPort">9066</property>\n\t\t\x3c!-- 0为需要密码登陆、1为不需要密码登陆 ,默认为0，设置为1则需要指定默认账户--\x3e\n\t\t<property name="nonePasswordLogin">0</property> \n\t\t<property name="useHandshakeV10">1</property>\n\t\t\x3c!-- 服务器有多个网卡，多个ip，指定要绑定的ip，0.0.0.0表示绑定所有--\x3e\n\t\t<property name="bindIp">0.0.0.0</property>\n\t\t\x3c!-- 前端写队列的大小 --\x3e\n\t\t<property name="frontWriteQueueSize">4096</property>\n\n\t\t\x3c!-- mycat默认字符集 --\x3e\n\t\t<property name="charset">utf8</property>\n\t\t\x3c!-- 连接mysql使用的隔离级别1、2、3、4，分别代表读未提交、读已提交、可重复读、串行化 --\x3e\n\t\t<property name="txIsolation">3</property>\n\t\t\x3c!-- mycat进程的数量，通常等于服务器CPU核数 --\x3e\n\t\t<property name="processors">8</property>\n\t\t\x3c!-- 前台应用访问mycat最大空闲时间，单位是毫秒 --\x3e\n\t\t<property name="idleTimeout">300000</property>\n\t\t\x3c!-- SQL执行超时时间，单位是秒 --\x3e\n\t\t<property name="sqlExecuteTimeout">300</property>\n\t\t\x3c!-- 如果SQL中没有指定limit，则会使用该参数来限制返回的结果集行数 --\x3e\n\t\t<property name="defaultMaxLimit">100</property>\n\t\t\x3c!-- mycat允许的最大packet大小 --\x3e\n\t\t<property name="maxPacketSize">104857600</property>\n\t\t\x3c!-- 1为开启实时统计、0为关闭 --\x3e\n\t\t<property name="useSqlStat">0</property>  \n\t\t\x3c!-- 1为开启全局表一致性检测、0为关闭 --\x3e\n\t\t<property name="useGlobleTableCheck">0</property>\n\t\t\x3c!-- 全局ID类型 \n\t\t\t0、本地文件方式\n\t\t\t1、数据库方式\n\t\t\t2、时间戳序列方式\n\t\t\t3、分布式ZK ID生成器\n\t\t\t4、ZK递增ID生成\n\t\t\t--\x3e\n\t\t<property name="sequnceHandlerType">2</property>\n\t\t\n\t\t\x3c!-- 子查询中存在关联查询的情况下,检查关联字段中是否有分片字段 .默认 false --\x3e\n\t\t<property name="subqueryRelationshipCheck">false</property> \n\t\t\x3c!--1为开启mysql压缩协议--\x3e\n\t    <property name="useCompression">1</property>\n\t    \x3c!--设置模拟的MySQL版本号--\x3e\n\t    <property name="fakeMySQLVersion">5.7.30</property>\n\t\t<property name="processorBufferChunk">40960</property>\n\t\t<property name="processorExecutor">32</property>\n\t    \x3c!--默认为type 0: DirectByteBufferPool | type 1 ByteBufferArena | type 2 NettyBufferPool --\x3e\n\t\t<property name="processorBufferPoolType">0</property>\n\t\t\x3c!--默认是65535 64K 用于sql解析时最大文本长度 --\x3e\n\t\t<property name="maxStringLiteralLength">65535</property>\n\t\t<property name="sequnceHandlerType">0</property>\n\t\t<property name="backSocketNoDelay">1</property>\n\t\t<property name="frontSocketNoDelay">1</property>\n\t\t<property name="processorExecutor">16</property>\n\t\t\n\t\t\x3c!--分布式事务开关\n\t\t\t0、为不过滤分布式事务\n\t\t\t1、为过滤分布式事务（如果分布式事务内只涉及全局表，则不过滤）\n\t\t\t2、为不过滤分布式事务,但是记录分布式事务日志\n\t\t\t--\x3e\n\t\t<property name="handleDistributedTransactions">0</property>\n\t\t\x3c!-- off heap for merge/order/group/limit  1开启 0关闭--\x3e\n\t\t<property name="useOffHeapForMerge">1</property>\n        <property name="memoryPageSize">64k</property>\n\t\t\x3c!-- 单位为k --\x3e\n\t\t<property name="spillsFileBufferSize">1k</property>\n\t\t<property name="useStreamOutput">0</property>\n\t\t\x3c!-- 单位为m--\x3e\n\t\t<property name="systemReserveMemorySize">384m</property>\n\t\t\x3c!--是否采用zookeeper协调切换  --\x3e\n\t\t<property name="useZKSwitch">false</property>\n\t\t\x3c!-- XA Recovery Log日志路径 --\x3e\n\t\t<property name="XARecoveryLogBaseDir">./</property>\n\t\t\x3c!-- XA Recovery Log日志名称 --\x3e\n\t\t<property name="XARecoveryLogBaseName">tmlog</property>\n\t</system>\n\t\n\t\x3c!-- 全局SQL防火墙设置 --\x3e\n\t\x3c!--白名单可以使用通配符%或着*--\x3e\n\t\x3c!--例如<host host="127.0.0.*" user="root"/>--\x3e\n\t\x3c!--例如<host host="127.0.*" user="root"/>--\x3e\n\t\x3c!--例如<host host="127.*" user="root"/>--\x3e\n\t\x3c!--例如<host host="1*7.*" user="root"/>--\x3e\n\t\x3c!--这些配置情况下对于127.0.0.1都能以root账户登录--\x3e\n\t\x3c!--\n\t<firewall>\n\t   <whitehost>\n\t      <host host="1*7.0.0.*" user="root"/>\n\t   </whitehost>\n       <blacklist check="false">\n       </blacklist>\n\t</firewall>\n\t--\x3e\n\n\t\x3c!--<user name="root" defaultAccount="true">\t--\x3e\n\t\t\x3c!--<property name="password">123456</property>\t--\x3e\n\t\t\x3c!-- 可以配置多个，逗号分割--\x3e\n\t\t<property name="schemas">TESTDB,TESTDB1,TESTD2</property>\t--\x3e\n\t\t\x3c!-- 表级 DML 权限设置 --\x3e\n\t\t\x3c!-- check表示是否启用权限控制--\x3e\t\n\t\t\x3c!--<privileges check="false">\t--\x3e\n\t\t\t\x3c!-- dml四个bit位分别代表insert、update、select、delete--\x3e\t\n\t\t\t\x3c!--<schema name="TESTDB" dml="0110" >\t--\x3e\n\t\t\t\t\x3c!--<table name="tb01" dml="0000"></table>\t--\x3e\n\t\t\t\t\x3c!--<table name="tb02" dml="1111"></table>\t--\x3e\n\t\t\t\x3c!--</schema>\t--\x3e\n\t\t\x3c!--</privileges>\t\t\t--\x3e\n\t\x3c!--</user>\t--\x3e\n\n    \x3c!-- 配置mycat的用户账号密码及读取权限 --\x3e\n\t<user name="root">\n\t\t<property name="password">mengqizhang</property>\n\t\t<property name="schemas">mycat-database</property>\n\t\t<property name="readOnly">false</property>\n\t</user>\n\n\t<user name="user">\n\t\t<property name="password">user</property>\n\t\t<property name="schemas">mycat-database</property>\n\t\t<property name="readOnly">true</property>\n\t</user>\n\n\n</mycat:server>\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br")])]),n("ul",[n("li",[s._v("配置 schema.xml")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<?xml version="1.0"?>\n<!DOCTYPE mycat:schema SYSTEM "schema.dtd">\n<mycat:schema xmlns:mycat="http://org.opencloudb/" >\n\n\n    \x3c!-- name="mycat-database" 是mycat的对外数据库名  --\x3e\n    \x3c!-- dataNode="masterNode1" 绑定的是dataNode的name的名称  --\x3e\n    <schema name="mycat-database" checkSQLschema="false" sqlMaxLimit="100" dataNode="masterNode1">\n\t\t    <table name="sys_user" primaryKey="id" dataNode="masterNode1"/>\n\t</schema>\n\t\n\t\x3c!-- 设置dataNode 对应的数据库，name 和schema中对应 ,dataHost：自己定义的host配置 ，database是mysql实际数据库 --\x3e  \n    <dataNode name="masterNode1" dataHost="masterHost1" database="master-a" />  \n    \x3c!-- <dataNode name="masterNode2" dataHost="masterHost1" database="master2" />  --\x3e\n\t\x3c!-- mycat 逻辑主机dataHost对应的物理主机.其中也设置对应的mysql登陆信息--\x3e  \n    <dataHost name="masterHost1" maxCon="1000" minCon="10" balance="1" writeType="0" dbType="mysql" dbDriver="native">  \n            \x3c!-- mycat对后端数据库进行心跳检测--\x3e\n            <heartbeat>select user()</heartbeat>  \n            \x3c!-- 写 mysql --\x3e\n            <writeHost host="server1" url="192.168.2.9:3306" user="root" password="mengqizhang">\n                \x3c!-- 读 mysql --\x3e  \n\t\t\t\t<readHost host="server1" url="192.168.2.9:3305" user="root" password="mengqizhang"/>  \t\t\t\n\t\t\t</writeHost>\n    </dataHost>\n</mycat:schema>\n\n\n----------------------------------------------------------------------------------------\nmaxCon：MyCAT连接数的最大值\nminCon：MyCAT连接数的最大值最小值\n\nbalance属性\n    balance=”0”, 不开启读写分离机制，所有读操作都发送到当前可用的 writeHost 上\n    balance=”1”，全部的 readHost 与 stand by writeHost 参与 select 语句的负载均衡\n    balance=”2”，所有读操作都随机的在 writeHost、 readhost 上分发。\n    balance=”3”， 所有读请求随机的分发到 wiriterHost 对应的 readhost 执行,writerHost 不负担读压力\nwriteType：定义写操作的执行方式，可选值为0、1\n    0表示所有的写请求都由第一个writeHost来执行，只有当它不可用时，才会由下一个可用的writeHost来执行（适用于主从复制集群）\n    1表示写请求随机分发到writeHost来执行（适用于PXC集群）\ndbType： 定于数据库类型\ndbDriver： 可选值为native、jdbc\n    native表示mysql原生的通信协议\n    jdbc表示连接其他的关系型数据库或者非关系型数据库\n    \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("ul",[n("li",[s._v("启动mycat")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    1. ./bin/mycat console ,其中console是可变参数，官方还提供了： { console | start | stop | restart | status | dump } \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("修改springboot连接数据库： 参考mysql-master项目，实现了读写分离效果！")]),s._v(" "),n("li",[s._v("执行select接口发现请求的数据均来自slave库")]),s._v(" "),n("li",[s._v("执行insert/update/delete均到了master库")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server:\n  port: 2020\n\nspring:\n  datasource:\n    username: root\n    password: mengqizhang\n    driver-class-name: com.mysql.jdbc.Driver # com.mysql.cj.jdbc.Driver\n    # url: jdbc:mysql://192.168.2.9:3306/master-a\n    url: jdbc:mysql://192.168.2.9:8066/mycat-database    \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"sharding-proxy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sharding-proxy"}},[s._v("#")]),s._v(" Sharding proxy")]),s._v(" "),n("h3",{attrs:{id:"sharding-proxy-作主从代理db-实现应用读写分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sharding-proxy-作主从代理db-实现应用读写分离"}},[s._v("#")]),s._v(" Sharding proxy 作主从代理DB，实现应用读写分离")]),s._v(" "),n("h3",{attrs:{id:"开始步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始步骤"}},[s._v("#")]),s._v(" 开始步骤：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("     1.  ShardingSphere官方文档 ： https://shardingsphere.apache.org/document/legacy/3.x/document/cn/overview/\n         ShardingProxy下载： https://shardingsphere.apache.org/document/current/en/downloads/\n         下载官方服务端tar包，该项目使用的是ShardingProxy版本是： 4.1.1\n     2.  配置 conf/server.yaml 和 config-master_slave.yaml\n     3.  加入mysql连接驱动包到lib中     \n     3.  启动 sh /bin/start.sh\n     4.  日志输出cat logs/stdout.log , ShardingProxy默认的端口是3307\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"server-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-xml"}},[s._v("#")]),s._v(" server.xml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    \n    #项目连接ShardingProxy授权\n    authentication:\n      users:\n        root:#root是用户名\n          password: mengqizhang\n    \n    # props:\n    #   max.connections.size.per.query: 1\n    #   acceptor.size: 16  # The default value is available processors count * 2.\n    #   executor.size: 16  # Infinite by default.\n    #   proxy.frontend.flush.threshold: 128  # The default value is 128.\n    #     # LOCAL: Proxy will run with LOCAL transaction.\n    #     # XA: Proxy will run with XA transaction.\n    #     # BASE: Proxy will run with B.A.S.E transaction.\n    #   proxy.transaction.type: LOCAL\n    #   proxy.opentracing.enabled: false\n    #   proxy.hint.enabled: false\n    #   query.with.cipher.column: true\n    #   sql.show: false\n    #   allow.range.query.with.inline.sharding: false\n          \n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"config-master-slave-yaml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-master-slave-yaml"}},[s._v("#")]),s._v(" config-master-slave.yaml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n# schema名称,每个文件都是单独的schema,多个schema则是多个yaml文件,\n# yaml文件命名要求是config-xxxx.yaml格式,虽然没有强制要求,但推荐名称中的xxxx与配置的schemaName保持一致,方便维护\n# 逻辑数据源名称，项目连接的数据库名\nschemaName: master_slave_db\n\n# 配置物理数据源信息（实际mysql连接）\ndataSources:\n  master_ds: #主dataSource名称\n    url: jdbc:mysql://xxxx:3306/binlog_user\n    username: root\n    password: xxxx\n    connectionTimeoutMilliseconds: 30000\n    idleTimeoutMilliseconds: 60000\n    maxLifetimeMilliseconds: 1800000\n    maxPoolSize: 50\n  slave_ds_0: #从dataSource名称\n    url: jdbc:mysql://xxxx:3306/binlog_user\n    username: root\n    password: xxxx\n    connectionTimeoutMilliseconds: 30000\n    idleTimeoutMilliseconds: 60000\n    maxLifetimeMilliseconds: 1800000\n    maxPoolSize: 50\n\n# 这里配置这个规则的话,相当于是全局读写分离配置\nmasterSlaveRule:\n  name: ms_ds\n  masterDataSourceName: master_ds # 主库的dataSource名称\n  slaveDataSourceNames: # 从的dataSource列表,至少需要有一个\n    - slave_ds_0 # 从dataSource名称\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);