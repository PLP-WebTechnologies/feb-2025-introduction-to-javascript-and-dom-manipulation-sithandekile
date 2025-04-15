document.getElementById('myHeading').textContent=`My JavaScript Assignent Page`;
const deletBtn = document.getElementById('deletBtn');
const bgColorBtn = document.getElementById('ColorBtn');
const displayDiv = document.getElementById('myResults');
const selectInput=document.getElementById('colorSelect')  
const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');

greetBtn.addEventListener('click', () => {
  //lets get my name to output and trim white spaces
    const myName = nameInput.value.trim(); 
    if (myName) {
        displayDiv.textContent = `Hello, ${myName}! You are welcome to my assignment page.`;
    } else {
        displayDiv.textContent = 'Please enter your name to see magic.';
    }
    nameInput.value = ''; 
});

//my function for removing an element when a button is clicked.
 deletBtn.addEventListener('click', () => {
     displayDiv.remove()
 });

 //my function for adding an element when a button is clicked.
bgColorBtn.addEventListener('click', () => {
bgColorBtn.style.backgroundColor ='purple' 
  displayDiv.textContent='I Am Very Happy Today! '
})
//my function for changing the body background color
selectInput.addEventListener('change', () => {
    const selectedColor = selectInput.value;
    document.body.style.backgroundColor = selectedColor;
    displayDiv.textContent=`The background color is now ${selectedColor}`;
})