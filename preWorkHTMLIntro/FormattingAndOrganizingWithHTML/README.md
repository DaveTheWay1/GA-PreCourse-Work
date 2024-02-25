Now that you’ve styled your text, let’s see what HTML offers up in terms of page organization.

HTML has tags that make it easy to organize and keep track of all the content you add to a webpage. While these tags won’t add new content, they’ll wrap around several elements to say, “These are all related to each other!” Using organizational tags also allows you to apply specific styles to specific parts of your webpage when you start using CSS.

There are lots of organizational tags, which we can group into two major types:

Semantic HTML Tags 
Tell you something about the content they contain.
Indicate how the content will be displayed on the webpage.
<header>, <main>, <footer>, <article>, <aside>, <nav>

Non-Semantic HTML Tags
Don’t tell you much about the content they contain.
Are used more generally to organize groups of elements.
<div>, <span>

Non-Semantic HTML
Sometimes, you just need to group things together, and the result won’t make up a specific part of a website. In this case, you’d use a handy non-semantic HTML tag:

A <div> groups several elements together.
A <span> groups just a few words.

Non-semantic tags help you organize your content in HTML, but they’re especially important when you start styling your content with CSS. What if you have a header, paragraph, and list that are all related to the same topic and you want to give them the same style? You could group them all in a <div> and then add CSS styling to the <div> that applies to all of the elements it contains.

<div> stands for division, as in the division of content. Think of <div> tags as a way to group the information on your webpage into logical sections. After that, you can style all of the elements in that section similarly without affecting other nearby elements.

A <div> tag will wrap around HTML elements and group them together, like so:

<div>
  <h2>The start of a very important section.</h2>
  <p>This section has content that’s all related in some way.</p>
  <p>So we want to group it together and set it off from the rest of a page.</p>
  <p>That’s why we wrapped all of this in a div!</p>
</div>

You can also group content on a smaller level — within a sentence or paragraph — using the <span> tag. Maybe you want the first word in a sentence to be a different color, or a larger size. You can wrap simply that word in <span>!

<span>’s syntax is similar to that of the <strong> and <em> tags we learned about earlier in this lesson.

<p>I want to call out <span>these words</span> in this sentence, but none of the other ones.</p>