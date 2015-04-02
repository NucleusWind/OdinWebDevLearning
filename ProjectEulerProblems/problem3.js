//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?


var isPrime = function(num){
    var upper = Math.floor(Math.sqrt(num));
    for (var i = upper; i > 1; i--) {
		if (num % i === 0) {
            return false;
    	}
	}
	return true;
};

var largestPrime = function(num){
	var upper = Math.floor(Math.sqrt(num));
    var maxFac = Number.NEGATIVE_INFINITY;
	for (var i = upper; i > 0; i--) {
		if (num % i === 0) {
            var j = num / i;
            if (isPrime(j)){
                maxFac = Math.max(maxFac, j);
            }
            if (isPrime(i)){
                maxFac = Math.max(maxFac, i);
            }
    	}
	}
    return maxFac;
};


console.log(largestPrime(600851475143));