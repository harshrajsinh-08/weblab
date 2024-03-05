function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function count(arr) {
    let even = 0;
    let odd = 0;
    let prime = 0;

    for (let n of arr) {
        if (n % 2 === 0) {
            even++;
        } else {
            odd++;
        }

        if (isPrime(n)) {
            prime++;
        }
    }

    console.log('Array:', arr);
    console.log('Even numbers count:', even);
    console.log('Odd numbers count:', odd);
    console.log('Prime numbers count:', prime);
}
const arr = [2, 5, 8, 11, 15, 20, 23, 29, 30, 37];

// Call the function to count even, odd, and prime numbers
count(arr);
