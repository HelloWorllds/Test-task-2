$(document).ready(function() {
	$("body").on("click", "button", function(){
		var idtop = $(".faq").offset().top;
		$('html,body').animate({scrollTop: idtop}, 900);
		return false;
	});
});