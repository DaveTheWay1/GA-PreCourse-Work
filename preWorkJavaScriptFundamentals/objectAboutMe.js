// Now, it’s your turn to tell us something about yourself using an object!

// In CodePen:

// Create an object named aboutMe.
// Add four key-value properties inside the object.
// Make sure one of the properties is your name, one is your age, and one contains an array.
// When you’re done, console.log your object to check your work.

const aboutMe = {
    name: "David",
    age: 24,
    hobbies: ["Running", "Coding"],
    homeTown: "Union City"
}
console.log(aboutMe);
const {name} = aboutMe
const {age} = aboutMe
console.log(name, age);

// output:
// {
//     name: 'David',
//     age: 24,
//     hobbies: [ 'Running', 'Coding' ],
//     homeTown: 'Union City'
//   }
//   David 24