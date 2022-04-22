/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

//console log from 1-100
//if number % 3 = 0 , replace with fizz
//if  nnumber % 5 = 0 and number % 3 !== 0 print buzz

// for (let i = 1; i <= 100; i++){    
//     if (i % 3 == 0){
//         console.log('Fizz');
    

//     }else if (i % 5 == 0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
 
// }

for (let i = 1; i <= 100; i++){    
    if (i % 3 == 0){
        if(i % 5 == 0){
            console.log('FizzBuzz');
        }
        console.log('Fizz');
    

    }else if (i % 5 == 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
 
}

// here is the authors of eloquent js's solution, which is frustratingly much more eloquent than mine
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }