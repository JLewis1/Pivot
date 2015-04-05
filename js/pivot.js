var hash = document.URL.substr(document.URL.indexOf('#')+1); 
var menuItem = $(".description .menu.desktop li");
var contentArea = $(".content-area");

//Homepage deep linking
if(hash =="mgmt-content"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#mgmt-btn").addClass("active");
	$("#mgmt-content").addClass("active");
}
else if (hash == "cleanse-content"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#cleanse-btn").addClass("active");
	$("#cleanse-content").addClass("active");
}
else if (hash == "market-content"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#market-btn").addClass("active");
	$("#market-content").addClass("active");
}

//Case Studies deep linking

if(hash == "cs1"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#cs1").addClass("active");
}
else if(hash == "cs2"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#cs2").addClass("active");
}
else if(hash == "cs3"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#cs3").addClass("active");
}
else if(hash == "cs4"){
	contentArea.removeClass("active");
	menuItem.removeClass("active");
	$("#cs4").addClass("active");
}
//Menu functions
menuItem.click(
	function(){
		if(!$(this).hasClass("active"))
		{
			menuItem.removeClass("active");
			$(this).addClass("active");

			if($(this).is(":nth-child(1)")) 
			{
				contentArea.removeClass("active");
				$(".content-area:eq(1)").addClass("active");
			} 
			else if($(this).is(":nth-child(2)")) 
			{
				contentArea.removeClass("active");
				$(".content-area:eq(0)").addClass("active");
			} 
			else if($(this).is(":nth-child(3)")) 
			{
				contentArea.removeClass("active");
				$(".content-area:eq(2)").addClass("active");
			}
			else if($(this).is(":nth-child(4)")) 
			{
				contentArea.removeClass("active");
				$(".content-area:eq(3)").addClass("active");
			}
		} 
	});

//Mobile toggle buttons
var first = $(".content-area").first();
var last = $(".content-area").last();

$("#previous span").click(
	function(){
		if(first.is(":visible")){
			return false;
		} else {
			$(".content-area:visible").prev().show().next().hide();		
			$(".content-area.active").removeClass("active");
		}
});

$("#next span").click(
	function(){
		if(last.is(":visible")){
			return false;
		} else {
			$(".content-area:visible").next().show().prev().hide();
			$(".content-area.active").removeClass("active");
		}
});

//Main Nav
$("#nav").click(function(){
	$("#nav ul").toggle();

});
$("#nav #navigation-menu ul li").hover(function(){
	$(this).toggleClass("active");
});

//Validation

$.validator.setDefaults({
	submitHandler: function() {
		alert("Thank you for contacting us.");
	}
});

$().ready(function() {
	// validate the comment form when it is submitted
	$("#contactForm").validate({
		messages: {
			name: "This field is required",
			email: "Please enter a valid email address",
			message: "This field is required"
		}
	});

});
	