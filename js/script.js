// JavaScript Document
$(document).ready(function(){
	var posX = $(window).scrollTop();
	var value = posX/7;
	$(".titleImg").css("background-position", value + "% 50%");
	//TESTING PURPOSES
	//$(".subtitle-style").text(value); TESTING PURPOSES
	$(window).scroll(function(){
		var posX = $(window).scrollTop();
		var value = posX/7;
		$(".titleImg").css("background-position", "50% " + (50-value) +"%");
		//TESTING PURPOSES
		//$(".subtitle-style").text("50% " + Math.round(50+value,0) +"%"); 
	});
});