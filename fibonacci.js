//fibonacci sequence
const fibonacci = function(num) {
    if (num === 1) {
    //if given number is 1 return 0, 1
        return [0, 1];
    } else {
    //push adds new number to the end of the array and return the new length
        const n = fibonacci(num - 1);
        n.push(n[n.length - 1] + n[n.length - 2]);
        return n;
    }
};
//console the fabonacci sequence of 15
console.log(fibonacci(15));