// *  Putting It All Together
for (let i = 0; i < 100; i++) {
    console.log(i);
}
// With all of the pieces working together, we can summarize this for loop like so:

// Start an iterator variable, i, at the value of 0.
// If the value of i is less than 100, execute the code block.
// After the code block has run, add 1 to the i variable.
// The loop will repeat Steps 2 and 3 until the conditional, i < 100, is finally false. At that point, the loop “exits” and the code block no longer runs.

// * Looping Over an Array

const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}
// output
// chocolate chip
// gingersnap
// oatmeal raisin
// shortbread

// * “While” Loops
let number = 0;
while (number < 11) {
    console.log(number);
    number = number + 1;
}
// *
// no further notes its as simple as it looks except // you must ensure there will be an end or else youll get an //! INFINITE LOOP
// output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// * Considering how strictly the for loop is defined, there’s a general rule on when each type of loop is appropriate:

// * If you know exactly how many times the loop should execute, use a for loop for its precision. This includes iterating over an array, which has a specific amount of items.
// * If you’re not sure how many times the loop has to run but you do know when it should stop, use a while loop.
