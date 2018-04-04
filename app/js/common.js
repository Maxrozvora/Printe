$(function() {

	$('.contact__more').on('click', function() {
		$('.tooltip').toggleClass('d-none');
	});
	$('.contact__more').on('focusout', function() {
		$('.tooltip').addClass('d-none');
	});

	$('.navbar-toggle__btn').on('click', function() {
		$('.navbar-colapse').toggleClass('d-none');
	});
	$('.navbar-toggle__btn').on('focusout', function() {
		$('.navbar-colapse').addClass('d-none');
	});

	 // button up
	 var heigth = $(window).height() / 5;
	 $(window).scroll(function() {
		if($(this).scrollTop() > heigth) {
			$('.callback').addClass('active');			
		}else if
			($(this).scrollTop() < heigth) {
				$('.callback').removeClass('active');
			}
	 });	 

});
