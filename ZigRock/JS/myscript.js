/*----- Jquery Code-----*/
$(window).on('load', function () {
	$('#preloader_status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});
/*-------- owl carousel --------------*/
$(document).ready(function () {
	$("#team-members").owlCarousel({

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



/*------------------------------ Responsive Tabs-----------------------*/

$(function () {
	$('#services-tabs').responsiveTabs({
		animation: 'slide',
	});
});


/*---------------Isotope-Portfolio --------*/



$(window).on('load', function () {

	// init Isotope
	var $grid = $('.grid').isotope({});
	// filter items on button click
	$('.portfolio-buttons').on('click', 'button', function () {

		var filterValue = $(this).attr('data-filter');

		$grid.isotope({ filter: filterValue });

		/*--------Adding Active Class-----------*/

		$('.portfolio-buttons').find('.active').removeClass('active');
		$(this).addClass('active')
	});
});




/*----------- Magnific popup ---------*/

$(function () {
	$('.portfolio-item').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',

		gallery: {
			enabled: true
		}

	});
});




/*---------Testimonials-Owl Carousel --------------*/

/*-------- owl carousel --------------*/
$(document).ready(function () {
	$("#testimonial-slider").owlCarousel({

		items: 1,
		autoplay: true,
		smartSpeed: 750,
		loop: true,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
	});
});


/*------------- Counter ------------*/


$(function () {
	$('.counter').counterUp({
		delay: 20,
		time: 2000
	});
});



/*-------Clients- owl carousel --------------*/
$(document).ready(function () {
	$("#clients-list").owlCarousel({

		items: 6,
		autoplay: true,
		smartSpeed: 750,
		loop: true,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
	});
});

