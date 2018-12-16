
var menu_state = 0; //0 - closed, 1 - open
//starter
$(function() {
	fit_screen();
	menu_state = 0;
}) ;



$(window).on('resize', function(){
	fit_screen();
});

$(".menu_button").on('click', expand_menu());


function fit_screen() {
	new_width = $(window).width() - $(window).height();
	$(".lateral").css("width", new_width);
	$(".menu-area").css("width", new_width);
	$(".lateral").css("left", new_width);
};

function expand_menu(){
	$(".menu-area").animate({
		height: '100vh'
	}, 'fast');
	$(".submenu").css("display", "block");
	$(".submenu").css("height", "20vh");
	$("#selected_menu").css("display", "none");
	check_selection(this);
	
}

function close_on(obj){
	TEXT = $(obj).text();
	$(".menu-area").animate({
		height: '20vh'
	}, 'fast');
	$(".submenu").css("display", "none");
	$("#selected_menu").html(TEXT);
	$("#selected_menu").css("display", "block");
	menu_state = -1;
}

function check_selection(obj){
	var my_op = "#op";
	for(var i = 1; i<=2; i++){
		if ( $(my_op+i).text() === $("#selected_menu").text() ){
			$(my_op+i).css("background-color", "#FFF");
		} else {
			$(my_op+i).css("background-color", "#c72ef3");
		}
	}
}


