const numbers = document.querySelectorAll(".numbers-btn");
const display = document.querySelector(".display");


numbers.forEach(element=>{
    element.addEventListener("click", (element)=>{
        display.innerText += element.innerText;
    });
});
console.log(numbers[0]);
