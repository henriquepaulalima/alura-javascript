"use strict"

const sum = function (a, a, c) { // Uncaught SyntaxError returned because of strict mode
    return a + a + c
}

console.log(sum(1, 2, 3))