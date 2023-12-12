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


	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});





});