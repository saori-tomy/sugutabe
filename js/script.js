// JavaScript Document

var headerHeight = $('.header').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 400);   
    return false;
});


$(".btn-trigger").on("touchstart",function(){
	$(this).toggleClass("active");
	$(".header-nav").fadeToggle(500);
});

$(".nav-item").on("touchstart",function(){
	$(this).toggleClass("active");
	$(".header-nav").fadeToggle(700);
	$(".btn-trigger").removeClass("active");
});
