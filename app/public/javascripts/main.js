$(function() {
    "use strict";
    function a() {
        $(".scroll-top").click(function() {
            return $("html, body").animate({
                scrollTop: 1
            }, 2e3), !1;
        }), $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on("click", function(a) {
            a.preventDefault();
            var b = this.hash, c = $(b);
            $("html, body").stop().animate({
                scrollTop: c.offset().top
            }, 900, "swing", function() {
                window.location.hash = b;
            });
        });
    }
    function b() {
        var a = $(window).height();
        console.log(a);
        $(window).width() < 480 ? $("#intro").css("height", a) : $("#intro").css({
            height: a,
            "min-height": "500px"
        });
    }
    function c() {
        var a = $(window).scrollTop();
        $(window).height();
        a > 100 ? $(".header").addClass("header-prepare") : $(".header").removeClass("header-prepare"),
        a > 1 ? $(".header").addClass("header-fixed") : $(".header").removeClass("header-fixed");
    }
    function d() {
        n.css("max-height", $(window).height() - 65 + "px");
    }

    function f(a) {
        var b = $(window).scrollTop(), c = $(".parallax").height(), d = .5 * b, e = -(.5 * b), f = b / c;
        $(".parallax").hasClass("parallax-section1") && a.css("top", d), $(".parallax").hasClass("parallax-section2") && a.css("top", e),
        $(".parallax").hasClass("parallax-static") && a.css("top", 1 * b), $(".parallax").hasClass("parallax-opacity") && a.css("opacity", 1 - 1 * f),
        $(".parallax").hasClass("parallax-background1") && a.css("background-position", "left " + d + "px"),
        $(".parallax").hasClass("parallax-background2") && a.css("background-position", "left " + -d + "px");
    }

    function i() {
        $(".intro-text-slider").owlCarousel({
            slideSpeed: 400,
            singleItem: !0,
            autoHeight: !1,
            navigation: !0,
            pagination: !0,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ],
            responsive: !0
        }), $(".team-carousel").owlCarousel({
            autoPlay: !1,
            stopOnHover: !0,
            items: 4,
            itemsDesktop: [ 1170, 3 ],
            itemsDesktopSmall: [ 1e3, 2 ],
            itemsTabletSmall: [ 768, 1 ],
            itemsMobile: [ 480, 1 ],
            pagination: !1,
            navigation: !1,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ]
        }), $(".testimonial-carousel").owlCarousel({
            autoPlay: !0,
            autoHeight: !0,
            stopOnHover: !0,
            singleItem: !0,
            slideSpeed: 350,
            pagination: !0,
            navigation: !1,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ]
        }), $(".content-carousel").owlCarousel({
            autoPlay: !0,
            autoHeight: !0,
            stopOnHover: !0,
            singleItem: !0,
            slideSpeed: 500,
            pagination: !1,
            navigation: !0,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ],
            responsive: !0
        }), $(".client-carousel").owlCarousel({
            autoPlay: 2500,
            stopOnHover: !0,
            items: 6,
            itemsDesktop: [ 1170, 5 ],
            itemsDesktopSmall: [ 1024, 4 ],
            itemsTabletSmall: [ 768, 3 ],
            itemsMobile: [ 480, 2 ],
            pagination: !1,
            navigation: !1,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ]
        }), $(".image-carousel").owlCarousel({
            navigation: !0,
            pagination: !0,
            slideSpeed: 350,
            paginationSpeed: 400,
            singleItem: !0,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ],
            autoPlay: !1,
            autoHeight: !0,
            responsive: !0
        });
    }

    $(document).ready(function() {
        a(), b(), c(), d(), i();
    }), $(window).load(function() {
        b(),  $("#preloader").fadeOut("slow", function() {
            $(this).remove();
        });
    }), $(window).resize(function() {
        b(), c(), d(), i();
    }), $(window).scroll(function() {
        a(), c();
    });
    var l = $(".slide-img, .bg-image");
    l.each(function() {
        $(this).attr("data-background-img") && $(this).css("background-image", "url(" + $(this).data("background-img") + ")");
    });
    var m = $(".nav-menu-icon"), n = $(".nav-menu");
    $(".nav-menu-icon").click(function() {
        return m.toggleClass("active"), n.toggleClass("active"), !1;
    }), $(window).stellar({
        responsive: !0,
        positionProperty: "position",
        horizontalScrolling: !1
    }), $(".parallax").each(function() {
        var a = $(this);
        $(window).scroll(function() {
            f(a);
        }), f(a);
    }), $(".singlepage-nav").singlePageNav({
        offset: 0,
        filter: ":not(.nav-external)",
        updateHash: !0,
        currentClass: "current",
        easing: "swing",
        speed: 750,
        beforeStart: function() {
            $(window).width() < 1024 && ($(".nav-menu-icon").removeClass("active"), $(".nav-menu").removeClass("active"));
        }
    });
}), $(window).load(function() {
    $(".all-demos-link").attr("href", "../demo.html");
});
