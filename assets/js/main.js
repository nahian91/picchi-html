(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		/* Testimonial Slide Active */
		$(".client").owlCarousel({
			items: 5,
			autoplay: true,
			loop: true,
			nav: false,
			dots: false
		});

		/* Counter Up */
		$('.counter1').counterUp({
			delay: 10,
			time: 1000
		});
		/* Portfolio Popup */
		$('.gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* One Page Nav */
		$('.mainmenu ul').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing',
			scrollOffset: 60
		});
	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 1) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
		
		/* Preloader */
		$(".preloader").fadeOut()
	});
}(jQuery));