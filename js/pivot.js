var hash = document.URL.substr(document.URL.indexOf('#')+1); 
var menuItem = $(".description .menu li");
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
				$(".content-area:eq(0)").addClass("active");
			} 
			else if($(this).is(":nth-child(2)")) 
			{
				contentArea.removeClass("active");
				$(".content-area:eq(1)").addClass("active");
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
$("#previous span").click(
	function(){
		$(".content-area.active").prev().addClass("active");
		$(".content-area.active").next().removeClass("active");
		
});

$("#next span").click(
	function(){
		
		$(".content-area.active").next().addClass("active");
		$(".content-area.active").prev().removeClass("active");
});

//Main Nav
$("#nav").click(function(){
	$("#nav ul").toggle();

});
$("#nav #navigation-menu ul li").hover(function(){
	$(this).toggleClass("active");
});