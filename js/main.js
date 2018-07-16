
jQuery(document).ready(function($){
    
    var contentSections = $('.panel'),
        fixedNavigation = $('.scroller-nav li a');
            topNavitems = $('.scroller-nav li a, .top-panel-nav li a');

	$(window).on('scroll', function(){
        updateNavigation();
	});

    topNavitems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
            var activeSection = $('.scroller-nav li a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                fixedNavigation.eq(activeSection).addClass('is-active');
			}else {
                fixedNavigation.eq(activeSection).removeClass('is-active'); 
            };      
        });
	}

    function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	800
        );
    }
});