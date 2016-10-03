var largestSquare = function (x,y,z){
	var num1;
	var num2;
	if (x>=y || x>=z){
		num1 = x;
	}
	if (num1===undefined){
		num1=y;
		num2=z;
	} else {
		num2=Math.max(y,z);
	}
	var answer = Math.pow(num1, 2) + Math.pow(num2, 2);
	return answer;
}