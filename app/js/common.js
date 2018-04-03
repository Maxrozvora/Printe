$(function() {

	$('.contact__more').on('click', function() {
		$('.tooltip').toggleClass('d-none');
	});
	$('.contact__more').on('focusout', function() {
		$('.tooltip').addClass('d-none');
	});

});
