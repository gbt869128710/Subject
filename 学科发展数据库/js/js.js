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
        if (w_h >= 200 && w_h <
            1000) {
            $(".left1,.right1").children().fadeIn(1000);
        } else if (w_h >= 1000 && w_h <
            1800) {
            $(".service").fadeIn(1000);
        } else if (w_h >= 2400 && w_h <
            3000) {
            $(".subject").fadeIn(1000);
        } else if (w_h >= 2800) {
            $(".left,.right").children().fadeIn(1000);
        }
    }) //move the scroll, content fadeIn

    //click the menu'a ,scroll to position
    $(".menu").children().eq(0).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 0
        }, 1500);

    })
    $(".menu").children().eq(1).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 722
        }, 1500);

    })
    $(".menu").children().eq(2).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 900
        }, 1500);

    })
    $(".menu").children().eq(3).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 1100
        }, 1500);

    })
    $(".menu").children().eq(4).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 1360
        }, 1500);

    })
    $(".menu").children().eq(5).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 2582
        }, 1500);

    })
    $(".menu").children().eq(6).on("click", function () {

        $("body").stop(true).animate({
            "scrollTop": 3379
        }, 1500);

    })


})
