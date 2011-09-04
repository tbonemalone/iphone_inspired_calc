$(document).ready(function() {
	console.log("ready");
	var num = ""
	var num0 = ""
	
	function getNum(buttonClicked) {
		// console.log("num = " + num);
		var i = buttonClicked
		num = num + i;
		// console.log("num = " + num);
		return num;
	}
	
	function clearAll() {
		num = "";
		num0 = "";
		console.log("num is cleared = " + num);
		console.log("num0 also cleared = " + num0);
		$('#display').val(0);
	}
	

	function switchNegPos(num) {
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

	//arithmetic functions
	
	function addNums() {
		// some code here
		num = num + num0;
	};
	
	function subtractNums() {
		// code here
		num = num - num0;
	};
	
	function multiplyNums() {
		// code here
		num = num * num0;
	};
	
	function divideNums() {
		// some code here
		num = num / num0;
	};
	
	// where the actual calculation and/or 
	$('#display').val(0);
	$('.button').click(function() {
		if($(this).hasClass("num")) {
			buttonClicked = $(this).text();
			console.log("hasClass num");
			number = getNum(buttonClicked);
			console.log(number);
			$('#display').val(number);
		}
		else if($(this).hasClass("all-clear")) {
			console.log("cleared it");
			clearAll()
		}
		else if($(this).hasClass("plus")) {
			console.log("plus");
			$('#display').val(0);
			// num0 = getNum();
			// console.log("num0 = " + num0); 
		}
		else if($(this).hasClass("minus")) {
			console.log("minus");
		}
		else if($(this).hasClass("multiply")) {
			console.log("multiply");
		}
		else if($(this).hasClass("divide")) {
			console.log("divide");
		}
		else if($(this).hasClass("equals")) {
			console.log("equals");
		}
		else if($(this).hasClass("pos-neg")) {
			console.log("pos-neg");
			num = switchNegPos(num);
			$('#display').val(num);
			return num;
			
			
		}
		
		
		
		

	})
	
}); //end doc ready