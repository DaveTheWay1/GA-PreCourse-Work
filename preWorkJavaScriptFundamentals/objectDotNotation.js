// Your Turn
// Let’s use dot notation to work with the object you created about yourself.

// Return to your CodePen and:

// Add one more property to your aboutMe object.
// Add a console.log to check your work.
// Up for a challenge?

// Let’s throw it back to string concatenation (which we covered in the last lesson), but this time, we’ll use the aboutMe object. Use concatenation and dot notation to console.log the following sentence (using your own name and age, of course). The solution is on the next slide.

// "Hello! My name is Lisa Simpson and I am 8 years old."
const aboutMe = {
    name:"David",
    age:24,
    homeTown:"Union City",
    petOwner: true
};
console.log(aboutMe);
console.log(aboutMe.name);
console.log("Hell! My name is " + aboutMe.name + " and I am " + aboutMe.age + " years old.");