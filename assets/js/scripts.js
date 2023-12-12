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






});