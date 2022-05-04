// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

let ourArray = [1, 2, 3];  //define array

let numberOfElements = Object.keys(ourArray).length //assign number of elements to a var

function doubled(n) {

    for (let i = 0; i < n; i++){

    ourArray[i] *= 2;

    }
}

doubled(number);

console.log(ourArray);
