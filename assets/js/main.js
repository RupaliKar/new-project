jQuery(document).ready(function($){
	$('.slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	new WOW().init();
	
		$('.cases').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		responsive:{
			0:{
				items:5
			},
			600:{
				items:5
			},
			1000:{
				items:5
			}
		}
	});
	
	});