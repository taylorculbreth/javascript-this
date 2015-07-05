(function(){
	$('#globalThisBtn').hover(function(){
		$('.col-md-4.globalThisBtn').css("background-color", "yellow");
	}, function(){
		$(".col-md-4.globalThisBtn").css("background-color", "lightblue");
	});
	
	$('#thisSimpleCallBtn').hover(function(){
		$('.col-md-4.thisSimpleCallBtn').css("background-color", "yellow");
	}, function(){
		$(".col-md-4.thisSimpleCallBtn").css("background-color", "lightblue");
	});
	
	$('#thisObjectMethodBtn').hover(function(){
		$('.col-md-4.thisObjectMethodBtn').css("background-color", "yellow");
	}, function(){
		$(".col-md-4.thisObjectMethodBtn").css("background-color", "lightblue");
	});
	
	$('#thisConstructorBtn').hover(function(){
		$('.thisConstructorBtn').css("background-color", "yellow");
	}, function(){
		$(".thisConstructorBtn").css("background-color", "lightblue");
	});
	
	$('#thisCallApplyBtn').hover(function(){
		$('.thisCallApplyBtn').css("background-color", "yellow");
	}, function(){
		$(".thisCallApplyBtn").css("background-color", "purple");
	});
	
	$('#thisBindBtn').hover(function(){
		$('.thisBindBtn').css("background-color", "yellow");
	}, function(){
		$(".thisBindBtn").css("background-color", "purple");
	});
	
	$('#thisDOMEventHandler').hover(function(){
		$('.thisDOMEventHandler').css("background-color", "yellow");
	}, function(){
		$(".thisDOMEventHandler").css("background-color", "purple");
	});
	
	$('#thisInLineEventHandler').hover(function(){
		$('.thisInLineEventHandler').css("background-color", "yellow");
	}, function(){
		$(".thisInLineEventHandler").css("background-color", "purple");
	});
})();