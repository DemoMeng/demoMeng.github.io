window.onload = function() {
    themeDefaultContent = $(
        '#app > .theme-container>.page > .theme-default-content'
    );

    themeDefaultContent.attr('id', 'container');
    btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
    btw.init({
        id: 'container',
        blogId: '30537-1663049879345-614',
        name: '蒙大拿的学习资料',
        // qrcode: 'http://demomeng.gitee.io/mengqizhang/wechat-white2.png',
        qrcode: 'https://demomeng.gitee.io/mengqizhang/%E5%85%AC%E4%BC%97%E5%8F%B7%E5%9B%BE%E7%89%87.png',
        keyword: '查看全文',
    });
};
