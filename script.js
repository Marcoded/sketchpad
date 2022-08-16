let divContainer = document.getElementById('div-container')
let mainButton = document.getElementById("main-button")


// create 256 divs with the class of divsClass
// I need to make the I responsive to user input, and the move the 
// grid-template-columns: repeat(3, 1fr);        and need to set those 2 property directly in JS
//grid-template-rows: repeat(3, 1fr);
const divCreator = () => { 
  
   userInput =  prompt("Set the resolution of the grid")
   if (userInput<=100){
 //console.log(typeof userInput)
   
   divContainer.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr);` // work  apparently setting only columns works
   
   userInput = userInput * userInput   // square root of the input to get the correct number of div for a grid
for (i=0;i<userInput;i++) {
   
    this["gridDiv"+i] = document.createElement('div');
    //this["gridDiv"+i].innerText = "this is text"
    this["gridDiv" +i].classList.add('divsClass');
    divContainer.appendChild(this["gridDiv"+i])  
   }
 
 
    
 }  else {
   alert("thats too much, try 100 is the max")
 }
}




const colorDivOnHover= () => {  // succesfully created a nodelist

let allSquare = document.getElementsByClassName('divsClass')

let divArray = Array.from(allSquare)
//console.log(divArray)
// we use the .forEach method to iterate through each button
divArray.forEach((div) => {

  // and for each one we add a 'click' listener
  div.addEventListener('mouseover', () => {
   //console.log('bonsoir')
   div.classList.add("divsClassMutated");
    
  });
});
}


const divFlusher = () => {
   divContainer.innerHTML = '';
}



mainButton.onclick = () => { 
   divFlusher()
   divCreator()
   colorDivOnHover()
   }