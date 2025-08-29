# Emergency Service Directory

A responsive web application that provides quick access to Bangladesh's emergency services with interactive features like call tracking, favorites, and clipboard functionality.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile and desktop devices
- **Interactive Cards**: 9+ emergency service cards with icons, names, and contact numbers
- **Heart System**: Click heart icons to add services to favorites (increases navbar counter)
- **Call Functionality**: Make calls with coin deduction system (20 coins per call)
- **Copy to Clipboard**: Copy emergency numbers directly to clipboard
- **Call History**: Track all called services with timestamps
- **Coin System**: Start with 100 coins, spend 20 per call

## Technology Stack

- **HTML**: Semantic markup structure
- **CSS**: Tailwind CSS for styling and responsive design
- **JavaScript**: Vanilla JavaScript for all interactive functionality
- **Next.js**: React framework for component structure

## JavaScript DOM Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById**: Returns a single element with the specified ID. It's the fastest method since IDs should be unique.
\`\`\`javascript
const element = document.getElementById('myId');
\`\`\`

**getElementsByClassName**: Returns a live HTMLCollection of all elements with the specified class name. It updates automatically when the DOM changes.
\`\`\`javascript
const elements = document.getElementsByClassName('myClass');
\`\`\`

**querySelector**: Returns the first element that matches the CSS selector. More flexible as it accepts any CSS selector.
\`\`\`javascript
const element = document.querySelector('.myClass');
const element = document.querySelector('#myId');
\`\`\`

**querySelectorAll**: Returns a static NodeList of all elements matching the CSS selector. It doesn't update when DOM changes.
\`\`\`javascript
const elements = document.querySelectorAll('.myClass');
\`\`\`

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element:

1. **Create the element**: Use `document.createElement()`
2. **Set properties**: Add content, attributes, classes
3. **Insert into DOM**: Use methods like `appendChild()`, `insertBefore()`, or `append()`

\`\`\`javascript
// Create element
const newDiv = document.createElement('div');

// Set properties
newDiv.textContent = 'Hello World';
newDiv.className = 'my-class';
newDiv.setAttribute('id', 'new-element');

// Insert into DOM
document.body.appendChild(newDiv);
// or
document.getElementById('container').append(newDiv);
\`\`\`

### 3. What is Event Bubbling and how does it work?

Event Bubbling is when an event starts from the target element and bubbles up through its parent elements to the document root. When you click a button inside a div, the click event fires on the button first, then on the div, then on the body, and so on.

\`\`\`javascript
// HTML: <div id="parent"><button id="child">Click me</button></div>

document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked'); // This will fire after child
});

document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked'); // This fires first
});
\`\`\`

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements, including dynamically added ones.

\`\`\`javascript
// Instead of adding listeners to each button
document.getElementById('container').addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        console.log('Button clicked:', e.target.textContent);
    }
});
\`\`\`

**Benefits**:
- Better performance (fewer event listeners)
- Works with dynamically added elements
- Easier memory management
- Cleaner code for similar elements

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault()**: Prevents the default browser behavior for an event (like form submission, link navigation).
\`\`\`javascript
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); // Link won't navigate
    console.log('Link clicked but not followed');
});
\`\`\`

**stopPropagation()**: Stops the event from bubbling up to parent elements.
\`\`\`javascript
document.querySelector('button').addEventListener('click', (e) => {
    e.stopPropagation(); // Parent click handlers won't fire
    console.log('Only this handler runs');
});
\`\`\`

They serve different purposes and can be used together if needed.
