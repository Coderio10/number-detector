function check() {
	var num = document.getElementById('number').value;
	if (num == '') {
		document.getElementById("screen").value= "Enter a number";
	}else if (num > 1){
		document.getElementById("screen").value = num + ' is greater than 1';
	}else if(num == 1){
		document.getElementById("screen").value = num + ' is equal to 1';
	}else if (num < 1) {
		document.getElementById("screen").value = num + ' is less than 1';
	}else{
		document.getElementById("screen").value = "invalid";
	}	
}	