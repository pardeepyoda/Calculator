let inputEl = document.getElementById("input-el");
let myarray =[];
myarray = inputEl.textContent;

const divideBtn = document.querySelector("#divide-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const addBtn = document.querySelector("#add-btn");
const substractBtn = document.querySelector("#substract-btn");
const equalBtn = document.querySelector("#equal-btn");
const allClearBtn = document.querySelector("#ac-btn");
const deleteBtn = document.querySelector("#del-btn");

function dot(){
    inputEl.textContent += ".";
 }
function zero(){
    inputEl.textContent += 0;
 }
function one(){
   inputEl.textContent += 1;
}
function two(){
    inputEl.textContent += 2;
 }
 function three(){
    inputEl.textContent += 3;
 }
 function four(){
    inputEl.textContent += 4;
 }
 function five(){
    inputEl.textContent += 5;
 }
 function six(){
    inputEl.textContent += 6;
 }
 function seven(){
    inputEl.textContent += 7;
 }
 function eight(){
    inputEl.textContent += 8;
 }
 function nine(){
    inputEl.textContent += 9;
 }      


divideBtn.addEventListener("click",function(){
     inputEl.textContent += "/"; 
})

multiplyBtn.addEventListener("click",function(){
    inputEl.textContent += "*"; 
})

addBtn.addEventListener("click",function(){
    inputEl.textContent += "+"; 
})

substractBtn.addEventListener("click",function(){
    inputEl.textContent += "-"; 
})

equalBtn.addEventListener("click",function(){
   
   inputEl.textContent = eval(inputEl.innerHTML);
   console.log(myarray); 
})

allClearBtn.addEventListener("click",function(){
   inputEl.textContent = ""

})

deleteBtn.addEventListener("click",function(){
   inputEl.textContent = inputEl.textContent.slice(0,-1);

})


