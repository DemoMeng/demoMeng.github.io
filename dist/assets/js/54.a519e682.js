(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{448:function(e,o,r){"use strict";r.r(o);var t=r(54),a=Object(t.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zookeeper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[e._v("#")]),e._v(" Zookeeper")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-安装"}},[e._v("#")]),e._v(" zookeeper 安装")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(' docker run -d -e TZ="Asia/Shanghai" -p 2181:2181 -v /root/docker/zookeeper:/data --name zookeeper --restart always zookeeper:3.7.0\n\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h2",{attrs:{id:"zookeeper节点类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper节点类型"}},[e._v("#")]),e._v(" zookeeper节点类型")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("持久化节点： 默认节点类型，创建节点的客户端在和zookeeper断开连接后，这个节点依旧存在")])]),e._v(" "),r("li",[r("p",[e._v("持久化顺序节点：在创建节点的时候，zookeeper会根据时间给该节点进行编号")])]),e._v(" "),r("li",[r("p",[e._v("临时节点：创建节点的客户端和zookeeper断开连接后，这个节点就会被删除")])]),e._v(" "),r("li",[r("p",[e._v("临时顺序节点：在创建临时节点的时候，给该临时节点编号，有顺序的临时节点，当客户端断开连接后，这个节点就会被删除")])])]),e._v(" "),r("h2",{attrs:{id:"zookeeper分布式锁原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper分布式锁原理"}},[e._v("#")]),e._v(" zookeeper分布式锁原理")]),e._v(" "),r("p",[e._v("核心思想就是： 当客户端想要获取锁的时候，就创建节点，使用完锁就删除该节点")]),e._v(" "),r("p",[e._v("zookeeper分布式锁原理恰巧是利用了临时顺序节点的特点")]),e._v(" "),r("ol",[r("li",[e._v("首先 zookeeper 会创建一个持久化节点 parentLock 。当第一个客户端 client1 想获得锁的时候，需要在该 parentLock 下创建一个 Lock1 临时顺序节点，并且它的顺序是1")]),e._v(" "),r("li",[e._v("随后该 client1 客户端查找 parentLock 下面所有的临时顺序节点并且排序，判断自己所创建的 Lock1节点是否为第一个，是则成功获得锁。")]),e._v(" "),r("li",[e._v("这个时候 client2 客户端需要获取锁，则也是在 parentLock 下创建一个 Lock2 临时顺序节点，并且它的顺序是2")]),e._v(" "),r("li",[e._v("随后 client2 客户端查找 parentLock 下面所有的临时顺序节点并且排序，发现自己所创建的 Lock2 节点并不是第一个，\n于是，client2 向排序仅比它靠前的 Lock1 节点注册 Watcher 监听，监听 Lock1 节点是否存在，存在那么就进入等待状态，不存在则获得了锁 Lock2节点就是第一个节点了。")])]),e._v(" "),r("p",[e._v("释放锁")]),e._v(" "),r("ol",[r("li",[e._v("当 Client1 任务执行完成后，Client1 和 zookeeper 断开连接，Zookeeper的临时顺序节点的特性，会删除和 Client1 关联的 Lock1节点")]),e._v(" "),r("li",[e._v("由于 Client2 一直监听 Watcher 着 Lock1节点，当Lock1节点删除后，ParentLock会循环判断 Lock2 节点是否为最小节点，如果是则 Lock2获得锁，即Client2客户端获得了锁。")])])])}),[],!1,null,null,null);o.default=a.exports}}]);