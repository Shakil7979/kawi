$(document).ready(function(){
	// Mobile Menu
	$('.product_cart').click(function(){
		$('.product_sidebar').fadeIn();
		$('.overlay_box').addClass('overlay_box_add');

		return false
	});

	$('.close_product').click(function(){
		$('.product_sidebar').fadeOut();
		$('.overlay_box').removeClass('overlay_box_add');

		return false
	});

	$('.menu_icon').click(function(){
		$('.menu').slideToggle(200);

		return false
	}); 
 
	$('.service_owl_carousel').owlCarousel({
		items:3.6,
		loop:true,
		nav:false,
		dots:false,
		margin:20,
		autoplay:true,
		responsive:{
			0:{
			  items:1
			},
			600:{
			  items:2
			},
			1000:{
				items:3.6,
			}
		  }
	});
 
	$('.service_second_owl').owlCarousel({
		items:3,
		loop:true,
		nav:false,
		dots:false,
		margin:20,
		autoplay:true,
	});


	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});





});