$(document).ready(function () {

    //делаюю хедер белый при скроле и обратно, и кнопка го топ
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('#header').addClass('header_scroll');
            $('#header').removeClass('header');
            $('#go_top').addClass('active_gotop');
        } else {
            $('#header').removeClass('header_scroll');
            $('#header').addClass('header');
            $('#go_top').removeClass('active_gotop');
        }
    });


    //плавный переход между якорями
    $("#main-nav li:not(.notli)").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#scroll_down").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    //при скролле увеличиваем opacity в мейн секции
    $(window).on('scroll', function () {
        var scrollCoef = 0.0004;

        $('.main-screen').css({
            opacity: 1 - $(window).scrollTop() * scrollCoef
        })
    });
    //при скролле меняем положение bg text portfolio
    $(window).on('scroll', function () {
        var scrollCoef = 0.5;

        $('.bg_text_port').css({
            left: 50 + $(window).scrollTop() * scrollCoef,
            transition: "all " + 1.5 + "s" + " ease-out"
        })
    });
    //при скролле меняем положение bg text About Me
    $(window).on('scroll', function () {
        var scrollCoef = 0.07;

        $('.bg_text_about').css({
            left: 50 - $(window).scrollTop() * scrollCoef,
            transition: "all " + 0.5 + "s" + " ease-out"
        })
    });
    //при скролле меняем положение bg text what i do
    $(window).on('scroll', function () {
        var scrollCoef = 0.05;

        $('.bg_text_ido').css({
            left: -150 + $(window).scrollTop() * scrollCoef,
            transition: "all " + 0.5 + "s" + " ease-out"
        })
    });

    //перспектива на карточках
    var port_img = $(".port_img");
    port_img.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();

        var rY = map(x, 0, $(this).width(), -10, 10);
        var rX = map(y, 0, $(this).height(), -10, 10);

        $(this).children(".image").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
    });

    port_img.on('mouseenter', function () {
        $(this).children(".image").css({
            transition: "all " + 0.3 + "s" + " ease-out"
        });
    });

    port_img.on('mouseleave', function () {
        $(this).children(".image").css({
            transition: "all " + 0.2 + "s" + " ease-out"
        });

        $(this).children(".image").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
    });

    function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    //бургер меню

    $(".burger_btn").on("click", function (event) {
        $(this).toggleClass('active');
        $(".menu_wrap").toggleClass('active');
    });
    $(".menu_wrap a").on("click", function (event) {
        setTimeout(function() {
            $(".menu_wrap").removeClass('active');
        }, 600);
    });
});

