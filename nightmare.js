var remove = function(n){
	if (n>=0){
		console.log(n);
		n--;
		remove(n);
	}
}

