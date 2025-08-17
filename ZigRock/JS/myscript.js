/*----- Jquery Code-----*/
$(window).on('load', function () {
	$('#preloader_status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});


/*-------- owl carousel --------------*/
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({

		items: 2,
		autoplay: true,
		smartSpeed: 750,
		loop: true,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
	});
});




/*-------------- Progress Bar-------------------*/


$(function () {

	$("#progress-elements").waypoint(function () {
		$(".progress-bar").each(function () {
			$(this).animate({
				width: $(this).attr("aria-valuenow") + "%"
			}, 1000);
		});

		this.destroy();

	}, {
		offset: 'bottom-in-view'
	});
});
