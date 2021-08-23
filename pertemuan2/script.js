$(document).ready(function(){
	
	//selector tag
	$('h1').css('color','red');
	$('p').css('color','blue');

	//selector Class
	$('.judul').css('background-color','red');
	$('.paragraf').css('color','green');

	//Selector ID
	$('#judul').css('border','2px solid blue');
	$('#paragraf').css('border','2px solid green');

	$('*').css('background-color','lightskyblue');

	$('h4:eq(2)').css('background-color','blue');
})