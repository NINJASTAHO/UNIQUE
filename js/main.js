// jQuery(function($) {
// 	$(document).ready( function() {
// 		$('.owl-carousel').owlCarousel({
// 	        loop:true,
// 	        margin:10,
// 	        nav:false,
// 	        autoplay:true,
// 	        autoplayTimeout:8000,
// 	        responsive:{
// 	            0:{
// 	                items:1
// 	            },
// 	            600:{
// 	                items:3
// 	            },
// 	            1000:{
// 	                items:4
// 	            }
// 	        }
//         })
// 	});
// });

jQuery(function($) {
	$(document).ready( function() {
	  	//enabling stickUp on the '.navbar-wrapper' class
	  	$('.navbar-wrapper').stickUp();
	});
});
jQuery(function($) {
	$(document).ready( function() {
	  	new WOW().init();
	});
});