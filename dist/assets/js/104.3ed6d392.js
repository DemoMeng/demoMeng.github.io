(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{493:function(s,e,n){"use strict";n.r(e);var r=n(54),a=Object(r.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-redis容器化启动-需要配置-redis-conf-配置文件-参考上面的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis容器化启动-需要配置-redis-conf-配置文件-参考上面的配置"}},[s._v("#")]),s._v(" 1. redis容器化启动，需要配置 redis.conf 配置文件，参考上面的配置")]),s._v(" "),n("p",[s._v("参考当前目录下的配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("version: '3'\nservices:\n  redis-master:\n    image: redis:7.0.9\n    container_name: redis-master-MQZ\n    restart: on-failure\n    volumes:\n      - /root/logs/docker-log/redis/master:/data\n      - /root/mqz/redis/redis-master.conf:/etc/redis/redis.conf\n    environment:\n      - TZ=Asia/Shanghai\n    command: redis-server /etc/redis/redis.conf\n    ports:\n      - \"6379:6379\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"redis-conf-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-conf-配置文件"}},[s._v("#")]),s._v(" redis.conf 配置文件")]),s._v(" "),n("p",[s._v("参考当前目录下的 redis.conf 文件")])])}),[],!1,null,null,null);e.default=a.exports}}]);