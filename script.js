const numbersBtn = document.querySelectorAll(".numbers-btn");
const zero = document.querySelector("#btn-0"); //zero gets its own thing because it is unique to other numbers
const decimalBtn = document.querySelector("#decimal-btn");
const squareBtn = document.querySelector("#square-btn");
const signBtn = document.querySelector("#sign-btn");
const equalBtn = document.querySelector("#equal-btn");
const deleteBtn = document.querySelector("#delete-btn");
const clearBtn = document.querySelector("#clear-btn");
const display = document.querySelector(".display");
const sideDisplay = document.querySelector(".side-display");
const operatorBtn = document.querySelectorAll(".operator-btn");
let answer = 0;
let isOperatorActive = false;
let currentOperator = "";
let displayNum = [];
let smallDisplayNum = 0;
equalBtn.addEventListener("click", ()=>{
    if(currentOperator == operatorBtn[0]) //divide
        answer = divide(smallDisplayNum, renderDisplayPanel());
    else if(currentOperator == operatorBtn[1]) //multiply
        answer = multiply(smallDisplayNum, renderDisplayPanel());
    else if(currentOperator == operatorBtn[2]) //subtract
        answer = subtract(smallDisplayNum, renderDisplayPanel());
    else if(currentOperator == operatorBtn[3]) //add
        answer = add(smallDisplayNum, renderDisplayPanel());
});
operatorBtn.forEach(element=>{
    element.addEventListener("click", (element)=>{
        isOperatorActive = true;
        currentOperator = element.target;
        smallDisplayNum = renderDisplayPanel();
        sideDisplay.innerHTML = smallDisplayNum + currentOperator.innerHTML;
    })
});
// Increment a number string to the display panel when the numbers 
// are clicked
numbersBtn.forEach(element=>{
    element.addEventListener("click", (element)=>{
        if(display.innerText == 0 && display.innerText.length == 1)
            displayNum = []; //remove the zero when you enter a 
                             //value betweewn 1-9
        if(display.innerText.length<20){
            displayNum.push(element.target.innerText);
            renderDisplayPanel();
        }
    });
});
zero.addEventListener("click", ()=>{
    if(display.innerText.length>=0 && renderDisplayPanel()>=1){
        displayNum.push(zero.innerText);
        renderDisplayPanel();
    }
    else{
        displayNum = [0];
        renderDisplayPanel();
    }
});
decimalBtn.addEventListener("click", ()=>{
    if(!displayNum.includes(".")){
        displayNum.push(".");
        renderDisplayPanel();
    }
})
signBtn.addEventListener("click", ()=>{
    if(!displayNum.includes("-")){
        displayNum.unshift("-");
        renderDisplayPanel();
    }
    else{
        displayNum.splice(0, 1);
        renderDisplayPanel();
    }
})
squareBtn.addEventListener("click", ()=>{
    displayNum = [Math.pow(renderDisplayPanel(),2)];
    renderDisplayPanel();
})
//delete the last element of the displayNum array
deleteBtn.addEventListener("click", ()=>{
    displayNum.pop();
    renderDisplayPanel();
})
//clear the entire array
clearBtn.addEventListener("click", ()=>{
    displayNum = [];
    sideDisplay.innerHTML = "";
    renderDisplayPanel();
})
//display the array in a single string
function renderDisplayPanel(){
    let joinedText = displayNum.join("");
    display.innerText = joinedText;
    if(isOperatorActive){
        display.innerText = "";
        displayNum = [];
        isOperatorActive = false;
    }
    return joinedText;
}
function multiply(val1, val2){
    answer = parseFloat(val1) * parseFloat(val2);
    displayNum = [answer];
    smallDisplayNum = answer;
    sideDisplay.innerHTML = smallDisplayNum + currentOperator.innerHTML;
    renderDisplayPanel();
    return answer;
}
function add(val1, val2){
    answer = parseFloat(val1) + parseFloat(val2);
    displayNum = [answer];
    smallDisplayNum = answer;
    sideDisplay.innerHTML = smallDisplayNum + currentOperator.innerHTML;
    renderDisplayPanel();
    return answer;
}
function subtract(val1, val2){
    answer = parseFloat(val1) - parseFloat(val2);
    displayNum = [answer];
    smallDisplayNum = answer;
    sideDisplay.innerHTML = smallDisplayNum + currentOperator.innerHTML;
    renderDisplayPanel();
    return answer;
}
function divide(val1, val2){
    answer = parseFloat(val1)/parseFloat(val2);
    displayNum = [answer];
    smallDisplayNum = answer;
    sideDisplay.innerHTML = smallDisplayNum + currentOperator.innerHTML;
    renderDisplayPanel();
    return answer;
}

