// ? Event listeners

// * Events 
// exmaples: hovering over an element, clicking a link, or scrolling down a page

// * Listener 
// a function

// * Event Listener
// * when you combine the two you get an event listener
// This is how the browser knows to respond to user actions. 
// Your browser “listens” for an event to take place, then responds 
// in whatever way you tell it to.

// * An event listener begins with on. Here are a few commonly used ones:
// onload  // When the page loads.
// onclick  // When a user clicks something.
// onmouseover  // When a user hovers their mouse over something.
// onfocus  // When a user puts the cursor on a form field.


// ? Basic Event Listeners: onclick
// general format
elementToGrab().onclick = function() {
    // Code that should run 
};

// * element to grab is just a place holder. what goes there is what we've been using to select elements or classes
// just like document.querySelector('').onclick or event document.getElementById('myButton').onclick

// Let’s say we created a function named respondToLoginAttempt that 
// throws a notification when the login element is clicked. The code 
// snippet would look like this:
document.querySelector('#login').onclick = respondToLoginAttempt;

// *  and then  it would run the respondToLoginAttempt function and do as it says

// ? Another Method: addEventListener
// general format:
elementToGrab().addEventListener(event, callback);

// ex
function sayHello() {
    console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello);

// ? onclick vs addEventListener
// In an earlier example, we used a function called respondToLoginAttempt. 

// * onclick
document.querySelector('#login').onclick = respondToLoginAttempt;

// * addEventListener()
document.querySelector('#login').addEventListener('click', respondToLoginAttempt);

// * the difference
// onclick only runs the last onclick created for a specific element
// not multiple onclicks for the same element

// addEventListener, on the other hand, allows for all addEventListeners dedicated to 
// the specific element to run

// IMPORATNT addEventLister is new and still not uniserally supported (internet explorer)

// ? The Event Object
document.querySelector('#disappearing-button').onclick = function(e) {
    console.log(e.target);
    e.target.remove();
}
// * event object 
// When defining the function, you can add a parameter, typically called e. 
// is passed into the function when it’s triggered. It contains helpful 
// details about the event that triggered the function, including which 
// element triggered the function: e.target.

// ? Knowledge Check
// Which of the following will console.log the text of a button that’s been clicked?

// Select the best answer.

document.querySelector('button').onclick = function(e){
    console.log(e.target.innerText);
}

// PROBLEM 1
// Add an event listener to the button with the generate-greeting id
// When the button is clicked, trigger the sayHello function
function sayHello(){
    console.log("hello!");
}
document.querySelector('#generate-greeting').addEventListener('click',sayHello);

  // PROBLEM 2
  // When the user clicks the "Add to the List!" button:
  // 1) Add a new li to the .todos ul
  // 2) Fill in the li with the text from the input field
  // 3) Reset the value of the input field to be empty

const lineAcross = (e) => {
    // Apply text-decoration: line-through to the clicked list item
    e.target.style.textDecoration = 'line-through';
    console.log(e.target.style.textDecoration = 'line-through');
};

const list = document.querySelector('ul')

const addToList = (e) => {
    // * when using a getElementById you do not need a # in the parenthesis like done in querySelector('#new-todo')
    //  bc getElementById was built to expect an id unlike querySelector who has not hence why it needs #
    // * .VALUE
    // we add it here to access the value, without it we will not get what we expect.
    const inputValue = document.getElementById('new-todo').value;
    // we plug it in like so
    const newListItem = `<li>${inputValue}</li>`;
    list.innerHTML += newListItem
    console.log(list);

    const newItem = list.lastElementChild; 
  // Get the newly added <li> element and adds the addEventListener like so
    newItem.addEventListener('click', lineAcross);
    
  // Reset the value of the input field to be empty
    document.getElementById('new-todo').value = '';
}

document.getElementById('generate-todo').addEventListener('click', addToList);
  // PROBLEM 3
  // When the user clicks any of the li items you've added, cross it out (add styling to create the line through effect)
  // This will involve attaching a listener to each <li> as you add them
  // You will have to modify the code you've written above!

// Select all <li> elements
// const items = document.querySelectorAll('li');

// Attach the event listener to each <li> element using a for loop
// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener('click', lineAcross);
//     console.log(items[i])
// }
