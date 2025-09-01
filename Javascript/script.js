// Function to convert a name to uppercase
// Traditional function declaration
function uperName(name){
    return name.toUpperCase();

}

console.log(uperName("Danilo Brayann"));


// Arrow function version
const  uperNames = (names) => names.toUpperCase();
console.log(uperNames("Danilo Brayann"));
    

// Function to handle mouse click events
// This function logs the event object to the console when a click occurs
function handleMouse(event){    
   // console.log(event.clientX);
 const x = event.clientX;
 const y = event.clientY;
 console.log(x, y);
}

document.addEventListener('click', handleMouse);