$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	let menu = false;
	$(".burger_menu").click(function(e){
		if(!menu){
			$("body").off("scroll");
			$(".menu_mobile").css({display: "flex"});
			$(".menu_mobile").animate({opacity: 1}, 300);
		}
		else{
			$(".menu_mobile").animate({opacity: 0}, 300, function(){
				$(".menu_mobile").css({display: "none"});
			});
			
		}
		menu = !menu;
	});
	window.onhashchange = function(h){
		if(window.location.hash == "#main_info"){
			$('html, body').animate({
				scrollTop: $(".main_info").offset().top
			}, 2000);
			window.location.hash = ""
		}
	}
	$(".menu_mobile").click(function(){
		if(menu){
			$(".menu_mobile").hide(300);
		}
	})
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
