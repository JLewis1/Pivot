$(".description .menu li").click(
	function(){
		if(!$(this).hasClass("active"))
		{
			$(".description .menu li").removeClass("active");
			$(this).addClass("active");

			if($(this).is("#cleanse-btn")) 
			{
				$(".content-area").hide();
				$("#cleanse-content").show();
			} 
			else if($(this).is("#mgmt-btn")) 
			{
				$(".content-area").hide();
				$("#mgmt-content").show();
			} 
			else if($(this).is("#market-btn")) 
			{
				$(".content-area").hide();
				$("#market-content").show();
			}
		} 
	});

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

$("#nav").click(function(){
	$("#nav ul").toggle();
});