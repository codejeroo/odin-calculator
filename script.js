// Variables
let num1 = "";
let num2 = "";
let operation = null;
let isFirstNumber = true;
let previousDisplay = "";
let previousResult = "";

// Operations
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
    if (parseFloat(num2) === 0) {
        return "I miss u ;("
    } else {
    return parseFloat(num1) / parseFloat(num2);
}
}

// Function to Operate
function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

// Display Numbers
let buttons = document.querySelectorAll(".column");
let displayOnScreen = document.querySelector(".show-input");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        previousDisplay = displayOnScreen.textContent;

        if (value === "+" || value === "-" || value === "x" || value === "/") {
            // Convert 'x' to '*' for multiplication
            let currentOperation = (value === "x") ? "*" : value;

            // Perform the previous operation if num2 is not empty
            if (num2 !== "") {
                previousResult = operate(num1, num2, operation);
                num1 = previousResult.toString();
                num2 = ""; // Reset num2 for the next input
                displayOnScreen.textContent = num1; // Update the display to show result
            }

            // Update the operation after performing previous operation
            operation = currentOperation;
            displayOnScreen.textContent += ` ${value} `; // Add the operator with spaces for readability
            isFirstNumber = false;

        } else {
            // Continue building the first or second number
            if (isFirstNumber) {
                num1 += value;
            } else {
                num2 += value; 
            }
            displayOnScreen.textContent += value; // Add the number to the display
        }
    });
});



//Display result

let solve = document.querySelector(".equal");

solve.addEventListener("click", () => {
    let result = operate(num1, num2, operation);

    let formattedResult = parseFloat(result);
    previousResult = parseFloat(result);

    if (Number.isInteger(formattedResult)) {
        displayOnScreen.textContent = formattedResult;
        num2 = ""
        num1 = formattedResult
        isFirstNumber = false
    } else if (result === "I miss u ;(") {
        displayOnScreen.textContent = "I miss u ;("
    } else {
        
        {
        displayOnScreen.textContent = formattedResult.toFixed(3);
        num2 = ""
        num1 = formattedResult
        isFirstNumber = false
    }
}
});

//Clear Display

let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
num1 = "";
num2 = "";
operation = null;
isFirstNumber = true;
previousDisplay = "";

displayOnScreen.textContent = "";

})

// Erase a number
let erase = document.querySelector(".del");

erase.addEventListener("click", () => {
    let currentDisplay = displayOnScreen.textContent;

    // If the current display is not empty
    if (currentDisplay.length > 0) {
        // Remove the last character from the display
        displayOnScreen.textContent = currentDisplay.slice(0, -1);

        // Update num1, num2, and operation based on the current state
        if (!isFirstNumber) {
            if (num2.length > 0) {
                num2 = num2.slice(0, -1);
            } else {
                operation = null;
                isFirstNumber = true;
            }
        } else {
            num1 = num1.slice(0, -1);
        }
    }
});

//THEME Selector

const names = document.querySelector(".name");
const form = document.querySelector(".theme-selector")
const  radios = document.querySelectorAll('input[type = "radio"][name = "theme"]');
const formColor= document.querySelector("label")
const footer = document.querySelector("#text-footer")


//EventListener

radios.forEach((radio) => {
    radio.addEventListener('change', function () {
        if (document.getElementById("light-mode").checked){
            document.body.style.backgroundColor ="white"
            names.style.color = "black"
            formColor.style.color = "black"
            footer.style.color = "black"            
        } else if(document.getElementById("dark-mode").checked) {
            document.body.style.backgroundColor = "hsl(222,26%,31%)"
             names.style.color = "white"
             footer.style.color = "white" 
        }
    }) 
    })
