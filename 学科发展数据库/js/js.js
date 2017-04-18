$(function () {


    $(".menus").on("click", function () {
        if ($(this).hasClass("h")) {
            $(this).removeClass("h");
        } else {
            $(this).addClass("h");
        }
    }) //click menus show again click hide

    $(".menu").on("click", function () {
        $(".menus").addClass("h");
    }) //menu hide
    $(".cen").on("click", function () {
        $("body").stop(true).animate({
            "scrollTop": 0
        }, 1000);
    }) //back to top

    $(".word").fadeIn(2000);
    $(window).on("scroll", function () {
        var w_h = $(window).scrollTop();
        var t_h = $(window).height();
        $(".menus").addClass("h"); //scroll menus hide
        if (w_h >= 200 && w_h <
            1000) {
            $(".left1,.right1").children().fadeIn(1000);
        } else if (w_h >= 1000 && w_h <
            1800) {
            $(".service").fadeIn(1000);
        } else if (w_h >= 2400 && w_h <
            3000) {
            $(".subject").fadeIn(1000);
        } else if (w_h > 2800) {
            $(".left,.right").children().fadeIn(1000);
        }
        if (w_h >= t_h) {
            $(".anchor").show(); //back to top show
        } else {
            $(".anchor").hide(); //back to top hide
        }
    }) //move the scroll, content fadeIn

    top();

    function top(val) {
        $("body").stop(true).animate({
            "scrollTop": val
        }, 1000);
    }
    //click the menu'a ,scroll to position
    $(".menu").children().eq(0).on("click", function () {

        top(0);

    })
    $(".menu").children().eq(1).on("click", function () {
        top(722);


    })
    $(".menu").children().eq(2).on("click", function () {

        top(900);

    })
    $(".menu").children().eq(3).on("click", function () {

        top(1100);


    })
    $(".menu").children().eq(4).on("click", function () {

        top(1360);


    })
    $(".menu").children().eq(5).on("click", function () {

        top(2582);


    })
    $(".menu").children().eq(6).on("click", function () {

        top(3379);


    })


    $(".btn").on("click", function () {
        $(".plat1").fadeIn();
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.786343, 32.0291430000);
        map.centerAndZoom(point, 16);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用

    })
    $(".x").on("click", function () {
        $(".plat1").fadeOut();
    })
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "24"
        },
        "share": {},
        "image": {
            "viewList": ["linkedin", "twi", "people"],
            "viewText": "分享到：",
            "viewSize": "16"
        },
        "selectShare": {
            "bdContainerClass": null,
            "bdSelectMiniList": ["linkedin", "twi", "people"]
        }
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
})
