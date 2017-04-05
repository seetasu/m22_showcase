var main = function()
{
    $("#menuME").addClass("active_a");

	// $("#menuME").click(function(){
 //    	$("#menuME").addClass("active_a");
 //     	$("#menuAC").removeClass("active_a");
 //     	$("#menuGR").removeClass("active_a");
 //     	$("#menuFU").removeClass("active_a");
 //    });

 //    $("#menuAC").click(function(){
 //     	$("#menuME").removeClass("active_a");
 //     	$("#menuAC").addClass("active_a");
 //     	$("#menuGR").removeClass("active_a");
 //     	$("#menuFU").removeClass("active_a");
 //    });

 //    $("#menuGR").click(function(){
 //     	$("#menuME").removeClass("active_a");
 //     	$("#menuAC").removeClass("active_a");
 //     	$("#menuGR").addClass("active_a");
 //     	$("#menuFU").removeClass("active_a");
 //    });

 //    $("#menuFU").click(function(){
 //     	$("#menuME").removeClass("active_a");
 //     	$("#menuAC").removeClass("active_a");
 //     	$("#menuGR").removeClass("active_a");
 //     	$("#menuFU").addClass("active_a");
 //    });
	var meTop = $("#me").height();
	var activitiesTop = meTop + $("#activities").height();
	var growthTop = activitiesTop + $("#growth").height();
	var futureTop = growthTop + $("#future").height();
	console.log(meTop);
	console.log(activitiesTop);
	console.log(growthTop);
	console.log(futureTop)
	$('.gridright').scroll(function(){
		var st = $('.gridright').scrollTop();
		console.log(st);
		$(".menuitem").removeClass('active_a');
		if((st>=0)&&(st<meTop-10)){
			$("#menuME").addClass("active_a");
		}else if((st>=meTop-10)&&(st<activitiesTop-10)){
			$("#menuAC").addClass("active_a");
		}else if((st>=activitiesTop-10)&&(st<growthTop-10)){
			$("#menuGR").addClass("active_a");
		}else if(st>=growthTop-10){
			$("#menuFU").addClass("active_a");
		}
	})
};
$(document).ready(main);
// var targetOffset = $("#menuAC").offset().top;

//     var $w = $(window).scroll(function(){
//     	if ( $w.scrollTop() > targetOffset ) {   
//         	$('#menuAC').addClass("active_a");
//     	} else {
//      	}
//     });