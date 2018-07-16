jQuery(document).ready(function($) {
    var contentSections = $(".panel"), fixedNavigation = $(".scroller-nav li a");
    topNavitems = $(".scroller-nav li a, .top-panel-nav li a"), $(window).on("scroll", function() {
        contentSections.each(function() {
            $this = $(this);
            var activeSection = $('.scroller-nav li a[href="#' + $this.attr("id") + '"]').data("number") - 1;
            $this.offset().top - $(window).height() / 2 < $(window).scrollTop() && $this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop() ? fixedNavigation.eq(activeSection).addClass("is-active") : fixedNavigation.eq(activeSection).removeClass("is-active");
        });
    }), topNavitems.on("click", function(event) {
        var target;
        event.preventDefault(), target = $(this.hash), $("body,html").animate({
            scrollTop: target.offset().top
        }, 800);
    });
});