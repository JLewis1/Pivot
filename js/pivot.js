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

$("#nav").click(function(){
	$("#nav ul").toggle();
});