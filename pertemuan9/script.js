$(document).ready(function(){
	$('#tombol').click(function(){
		$('#modal-box').slideDown(1000);
		$('#backround').fadeIn(1000);
	});

	$('#close-button').click(function(){
		$('#modal-box').slideUp(1000);
		$('#backround').fadeOut(1000);

	})
})