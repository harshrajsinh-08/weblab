const numbers = [2, 3, 5, 7, 11, 13, 16, 17];

numbers.forEach(function(number) {
    if (isPrime(number)) {
        console.log(number);
    }
});
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
