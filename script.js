let divContainer = document.getElementById('div-container')


// create 256 divs with the class of divsClass
const divCreator = () => { 
for (i=0;i<256;i++) {
    this["gridDiv"+i] = document.createElement('div');
    //this["gridDiv"+i].innerText = "this is text"
    this["gridDiv" +i].classList.add('divsClass');
    divContainer.appendChild(this["gridDiv"+i])  
    
 }  
}

divCreator()



// succesfully created a nodelist

const colorDivOnHover= () => { 

let allSquare = document.getElementsByClassName('divsClass')

let divArray = Array.from(allSquare)
console.log(divArray)
// we use the .forEach method to iterate through each button
divArray.forEach((div) => {

  // and for each one we add a 'click' listener
  div.addEventListener('mouseover', () => {
   console.log('bonsoir')
   div.classList.add("divsClassMutated");
    
  });
});
}

colorDivOnHover()


// to make