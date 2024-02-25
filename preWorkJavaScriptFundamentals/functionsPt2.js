// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function
function hello (name){
    console.log("Hello " + name);
}
hello("David");

// PROBLEM 2
// Modify this function to accept two parameters, representing two numbers you want to multiply.
// Then, add a code block that will multiply the two parameters and return the output.
// The code block below the function is meant to check your work for the arguments 2 and 2.
function multiply(num1, num2){
    return num1 * num2;
}

const four = multiply(2, 2);
if(four === 4){
    console.log("The multiply function works!");
}else{
    console.log("Something's wrong with the multiply function!")
}


  // PROBLEM 3
  // Write a function that accepts an array as a parameter.
  // The function should loop through the given array and console.log each element in the array.
  // Create your own array to test your work.
function arrays (array){
    for(i=0; i < array.length; i++){
        console.log(array[i]);
    } 
}
arrays([0,1,2,3,4,5]);
// output
// 0
// 1
// 2
// 3
// 4
// 5


  // PROBLEM 4
  // Write a function that finds the maximum number in a given array.
  // Loop through the array and keep track of the biggest number seen so far.
  // Once the loop is over, return the biggest number in the array.

function maxNum(array){
    let max = 0;
    for (i = 0; i < array.length; i++){
        if(max < array[i]){
            max =  array[i]
        }
    }
    console.log(max);
}
maxNum([5,9,0,11,8]);
//output: 11