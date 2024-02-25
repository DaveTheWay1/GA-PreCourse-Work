// * Knowledge Check

// Given this HTML:
// ```
// <h1>Visit my site</h1>
// ```
// How would you update it to read like this?
// ```
// <h1>Visit my <a href='http://www.coolsite.net'>site</a></h1>
// ```
// (Hint: Use the innerHTML property for this.)
// Enter your response.

const h1Element = document.querySelector('h1');
h1Element.
innerHTML = "Visit my <a href='http://www.coolsite.net'>site</a>";