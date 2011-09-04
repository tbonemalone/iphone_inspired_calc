$(document).ready(function() {
	console.log("ready");
	var num = ""	
	
	function getNum() {
		console.log("num = " + num);
		var i = $(this).text()
		num = num + i;
		console.log("num = " + num);
		$("#display").val(num);
	}
	
	function clearAll() {
		num = "";
	}
	
	function switchNegPos() {
		if (num === 0) {
			num = num
		}
		else if (num > 0) {
			num = num - (num * 2);
		}
		
		else {
			num = num + (num * 2);
		}
	}

	$(".num").click(function() {
		console.log("num = " + num);
		var i = $(this).text()
		num = num + i;
		console.log("num = " + num);
		$("#display").val(num);
	});
}); //end doc ready

