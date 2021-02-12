
//select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
//put h1 inside of it
//create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'The ancestors of Llamas are thought to have originated from the central plains of North America about 40 million years ago.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
  console.log('Heading has been clicked');
  document.body.style.backgroundColor = 'yellow';
}


