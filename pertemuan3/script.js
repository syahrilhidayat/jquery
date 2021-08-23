$(document).ready(function(){

	//Event Click
	$('#click').click(function(){
		alert('Saya Sedang Belajar JQuery');
	})

	//Double Click
	$('#doubleclick').dblclick(function(){
		$(this).css('background-color','red');
	});

	//mouse Leave
	$('.mouse').mouseleave(function(){
		$(this).css('background-color','skyblue');
	})

	//mouse Enter
	$('.mouse').mouseenter(function(){
		$(this).css('background-color','green');
	})

	//event keydown
	$('#keydown').keydown(function(){
		$('#pesanKeydown').text($(this).val());
	})

	//event keyup
	$('#keyup').keyup(function(){
		$('#pesanKeyup').text($(this).val());
	})
});