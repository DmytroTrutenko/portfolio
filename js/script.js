$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('#header').addClass('header_scroll');
            $('#header').removeClass('header');
        } else {
            $('#header').removeClass('header_scroll');
            $('#header').addClass('header');
        }
    });

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

});

