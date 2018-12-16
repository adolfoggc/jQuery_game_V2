

$(function() {
	fit_screen();
}) ;


$(window).on('resize', function(){
	fit_screen();
});

function fit_screen() {
	new_width = $(window).width() - $(window).height();
	$(".lateral").css("width", new_width);
	$(".menu-area").css("width", new_width);
};