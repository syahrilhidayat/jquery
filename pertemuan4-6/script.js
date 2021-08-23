$(document).ready(function(){
	//efek Hide
	$('#hide').click(function(){
		$('#kotak').hide(1000);
	});

	//efek Show
	$('#show').click(function(){
		$('#kotak').show(1000);
	});

	//efek FadeOut
	$('#fadeOut').click(function(){
		$('.box1').fadeOut();
		$('.box2').fadeOut(1000);
		$('.box3').fadeOut(3000);
	});
	$('#fadeIn').click(function(){
		$('.box1').fadeIn();
		$('.box2').fadeIn(1000);
		$('.box3').fadeIn(3000);
	});
	$('#fadeToggle').click(function(){
		$('.box1').fadeToggle();
		$('.box2').fadeToggle(1000);
		$('.box3').fadeToggle(3000);
	})
	$('#fadeTo').click(function(){
		$('.box1').fadeTo("slow",0.2);
		$('.box2').fadeTo("slow",0.3);
		$('.box3').fadeTo("slow",0.4);	
	})

	//pertemuan 5

	//efek slideUp
	$('#slideUp').click(function(){
		$('#slide').slideUp(1000);
	});
	//efek slideDown
	$('#slideDown').click(function(){
		$('#slide').slideDown(1000);
	});
	//efek slideToggle
	$('#slideToggle').click(function(){
		$('#slide').slideToggle(1000);
	})

	//Pertemuan 6

	//efek Animate
	$('#kiri').click(function(){
		$('#animateBox').animate({'left': "-=50px"}, "slow");
	});
	$('#kanan').click(function(){
		$('#animateBox').animate({'right': "-=50px"}, "slow");
	})
	//efek ClearQueue
	$('#star').click(function(){
		$('#clearQueueBox').animate({left: '+=500'}, 5000);
		$('#clearQueueBox').queue(function(){			 
		});
	});

	$('#stop').click(function(){
		$('#clearQueueBox').clearQueue();
		$('#clearQueueBox').stop();
	})

	//efek Delay
	$('#delay').click(function(){
		$('#kotakSatu').slideUp(2000).delay(3000).fadeIn(2000);
		$('#kotakDua').slideUp(2000).fadeIn(2000);
	})

});