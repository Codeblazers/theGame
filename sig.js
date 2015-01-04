/*jslint browser: true*/
/*global $, jQuery, alert*/

var main = function () {
	$('.list').mouseenter(function () {
		$(this).addClass("listconf");
	});
	$('.list').mouseleave(function () {
		$(this).removeClass("listconf");
	});
    
    $('.button').click(function () {
        $('.wrw').fadeOut(1000);
        $('.next').delay(1000).fadeIn(2000).addClass('wrw');
    });
};

$(document).ready(main);