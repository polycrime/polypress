$(function() {
	
	$('#notepad').click(function() {
		$('#dad').fadeIn('slow', function() {
			$(this).fadeOut('slow');
		});
	});
	
	$('#skeleton').click(function() {
		$('body').css('background-image', 'url(images/skeleton.jpg)');
		setTimeout(function() {
			$('body').css('background-image', 'url(images/stars.png)');
		}, 200);
	});
	
});