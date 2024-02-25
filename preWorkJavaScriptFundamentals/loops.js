// PROBLEM 2
// Use a while loop to count down the days until the finale of your favorite show.
// For each day, log the message "_____ days until the last episode!"
// If the daysUntilTheFinale is evenly divisible by 7, don't log the above message.
// Instead, log "Only _____ weeks until the last episode!"
// HINT: You will need to use the modulus (%)

let daysUntilTheFinale = 30;
while (0 <= daysUntilTheFinale){
    if (daysUntilTheFinale === 0){
        console.log("Today's the day!")
    } else {
        console.log(daysUntilTheFinale + " days until the last episode");
    }
    // * THIS MUST go on the outside and not in the else!!!
    // if it was in the else, the while loop would never come to an end because once day until finale hits 0
    // its still going to keep running and with else having the -1 it would continue w the loop
    daysUntilTheFinale = daysUntilTheFinale - 1;
}
// output:
// 30
// 29
// 28
// 27
// 26
// 25
// 24
// 23
// 22
// 21
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// PROBLEM 3
// Firing a laser has a 50% chance of hitting, reducing enemyHealth by 1 each time
// Use Math.random() to determine whether the laser was successful or not
// Continue firing lasers (subtract one from the lasers variable) until the enemyHealth is 0 or lasers is 0
// Each time, log how many lasers are left, and how much enemyHealth remains
let lasers = 10;
let enemyHealth = 5;

