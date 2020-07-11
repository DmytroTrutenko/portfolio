$(document).ready(function () {
    //делаюю хедер белый при скроле и обратно
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('#header').addClass('header_scroll');
            $('#header').removeClass('header');
        } else {
            $('#header').removeClass('header_scroll');
            $('#header').addClass('header');
        }
    });
    //плавный переход между якорями
    $("#main-nav li:not(:last-child)").on("click", "a", function (event) {
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
            transition: "all " + 0.05 + "s" + " linear"
        });
    });

    port_img.on('mouseleave', function () {
        $(this).children(".image").css({
            transition: "all " + 0.2 + "s" + " linear"
        });

        $(this).children(".image").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
    });

    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

});

