function sum (a, b) {
    return a + b 
}
console.log(sum(8,10));

function largestNum (a, b, c) {
    return Math.max(a, b, c);
}

console.log(largestNum(18, 32, 16));

function evenOdd (a) {
    if (a % 2 === 0) {
        return  a + " is even!"
    } else {
        return a + " is odd!"
    }
}

console.log(evenOdd(9));

function myString(a) {
    if (a.length <= 20) {
        return a + a;
    } else {
        var haflLength = a.length / 2;
        return a.substring(0, haflLength)
    }
        
    }
console.log(myString("Yo, yo, yo! "))