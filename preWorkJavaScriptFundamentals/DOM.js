// ? Finding DOM Elements

// * There are many methods for selecting specific DOM elements,
// * but we’ll keep things simple by using these two:

document.querySelector()
// finds THE matching element

document.querySelectorAll()
// finds ALL matching elements

// The document written before the query is telling 
// JavaScript to check out the HTML page (aka, the document). 
// Information about the specific element you want to grab 
// goes inside of the (). Let’s look at that next.

// ? Knowledge Check
// document.querySelector() and 
// document.querySelectorAll() 
// find DOM elements using a format that
//  should be familiar: CSS selector syntax.

// Let’s do a quick refresher: Which of the 
// following statements about CSS selectors are true?
// . indicates a class
// # indicates an id

// ? querySelector and querySelectorAll

document.querySelector('p') 
// grabs the first p tag

document.querySelector('.magic')
// grabs the first element with magic class

document.querySelector('#hero')
// grabs the first element with hero id

document.querySelector('.magic p')
// selects the first p tag in the class magic

// ? document.querySelectorAll works in basically the same way, 
// * except it will grab ALL of the elements that match the query.

// ? Knowledge Check
// Take a look at the following code snippet. 
// How would we grab the element with the class complete?

// <h2>To-Do List</h2>
// <ul>
//     <li id = "special">Feed the cat.</li>
//     <li class = "complete">Take out the trash.</li>
//     <li>Mow the lawn.</li>
// </ul>

document.querySelector('.complete')

// ? practice

{/* <div class="advertisement">
<h1>Buy stuff from <span id="company-name">Stuff-Corp!</span></h1>
<p class="sales-pitch"> Without stuff, your life is incomplete!</p>
<p>You really should get some stuff.</p>
</div> */}

// select the first h1 element
const h1 = document.querySelector('h1');
// select the element with the id of company-name
const companyName = document.querySelector('#company-name');
// select the element with the class of sales-pitch
const salesPitch = document.querySelector('.sales-pitch');
// select all paragraph tags
const allParagraphTags = document.querySelectorAll('p');
// select all elements inside of the advertisement div
const allAdvertisementContent = document.querySelectorAll('div .advertisement');

// ? Manipulating the DOM

// Once you’ve grabbed an element from the DOM, 
// * you can access it, update it, and more.

// * You can do many things with a DOM element. 
// The table below lists a few of the most common ones.

// * element.innerHTML
// returns or sets the HTML content of the element
document.querySelector('h2').innerHTML = 'Hello there!';
// updates h2 to "Hello there!"

// * element.style
// returns or sets the style attributes of the element
document.querySelector('h2').style.color = 'blue';
// changes the color of h2 to blue

// * element.className
// sets the class of the element 
document.querySelector('h2').className = 'complete';
// changes the class of h2 to complete

// * element.parentNode
// Returns the parent or containing element, of the requested element
document.querySelector('h2').parentNode;
// returns the parents of the element h2

// * element.childNodes
// returns all of the child nodes that an element contain
document.querySelector('h2').childNodes;
// returns the child nodes of the h2

// ? Knowledge Check
// Given this HTML:

// <h1>Visit my site</h1>
// How would you update it to read like this?

// <h1>Visit my <a href='http://www.coolsite.net'>site</a></h1>
// (Hint: Use the innerHTML property for this.)

// Enter your response.

// * Our Answer
// Here’s how you could update this text using the DOM. You’d use the innerHTML property to update the entire text content of the <h1>.

document.querySelector('h1').innerHTML = "Visit my <a href='http://www.coolsite.net'>site</a>";

// ? Getting, Setting, and Removing Attributes

// There are methods for DOM elements that can 
// be used to get, update, or remove properties. 
// An especially useful trio of methods is getAttribute(), 
// setAttribute(), and removeAttribute(), 
// which can read or write any HTML attribute of a DOM 
// element. Let’s take a look:

const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

document.querySelector('#title').setAttribute('class','blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelector('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.

// ? Knowledge Check
// * Given the following HTML, how would you add the class of urgent to the <h2>?

// <h1>Welcome to our store</h1>
// <div class="advertisement">
//     <h2>BUY BUY BUY</h2>
//     <p>Only 30 days left in our monthly sale. Move fast!</p>
// </div>
// (Hint: We covered two different ways of accomplishing this in the lesson.)

// Enter your response.

document.querySelector('h2').setAttribute('class','urgent');

// ? And on the Eighth Day, You Created DOM Elements
// Not only can you access and update HTML elements using the DOM, 
// you can also create new ones from scratch.

const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match";
paragraph.setAttribute("class","registration-error");

// This is what's created: <p class="registration-error">Your passwords did not match.</p>

// * Appending Elements
// Once we've created a new element, we have to add that
// element to the page somewhere– it won't just show up on its own!

// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the appendChild method to add our newPost inside of the postsDiv
postsDiv.appendChild(newPost);



// Reading information from DOM elements
// 1) Console.log the text of the element with the id of "title"
console.log(document.querySelector('#title').innerText)

// 2) Console.log the class of the first span on the page

console.log(document.querySelector('span').getAttribute('class'));

// Updating properties of DOM elements
// 1) Turn the text blue in the first element with the "blue" class
const blueText = document.querySelector('.blue').style.color='blue';

// 2) Change the text of the "#title" element to a greeting of your choice
document.querySelector('#title').innerText = 'Greetings!';
// Creating new DOM elements
const paragraph = document.createElement('p');
paragraph.innerText = 'Drink water, eats some healthy fruits, work out, and enjoy the nice afternoon coding!';
console.log(paragraph)
document.body.appendChild(paragraph);
// 1) Create an h4 element with the text of "Powered by Javascript"
const hFour = document.createElement('h4');
hFour.innerText = 'Powered by JavaScript'
console.log(hFour);
document.body.appendChild(hFour);

// 1b) Add that element to the end of the page
// 2) Create a ul with class "todos" and add it to the end of the page
const label = document.createElement('label');
label.innerText = 'Unordered List';
document.body.appendChild(label);

const list = document.createElement('ul');
list.setAttribute('class','todos');
console.log(list);
document.body.appendChild(list)

// 2b) Looping through this array, add the strings as <li> elements
const toDoList = ["create elements", "update them", "add them to DOM"];
for(let i = 0; i < toDoList.length; i++){
    console.log(toDoList[i]);
    let item = document.createElement('li');
    item.innerText = toDoList[i];
    console.log(item)
    list.appendChild(item)
}

// Removing elements from the DOM
// 1) Remove the #title h1 from the page
// 2) Using a while loop, remove each child of the ul until it is empty
document.querySelector('h1').removeAttribute('id');
console.log(document.querySelector('h1'));
