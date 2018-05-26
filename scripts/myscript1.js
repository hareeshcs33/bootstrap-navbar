$(document).ready(function(){
	$('#form_before_lounch').click(function() {
		$(this).animate({height:"250px",width:"400px"});
		$(this).children("p").animate({fontSize:"25px"});

		$("#form").delay(500).fadeIn();
	});
	$('#submit').click(function(){
		var u_name = $('#username').val();
		var pass = $('#password').val();

		if(u_name != "" && pass != "") {
			
			$('#form_before_lounch').fadeOut();
			$('h1').fadeIn();
			$('h1').html('Welcome '+u_name + ' ' +'click main page button');
            $('h1').animate({marginTop:'200px'});
            $('#mainpage').css('display', 'block');
        };
	});

});