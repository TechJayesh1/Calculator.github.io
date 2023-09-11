// script.js

document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    const swipeButton = document.querySelector(".swipe"); // Added Swipe Button Selection

    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    let scientificButtons = ["sin", "cos", "tan", "log", "ln", "(", ")", "^", "!", "e", "INV", "RAD", "DEG"];

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "C") {
                expression = "";
                display.value = "";
            } else if (buttonText === "←") {
                expression = expression.slice(0, -1);
                display.value = expression;   
            } else if (buttonText === "=") {
                try {
                    const result = eval(expression);
                    display.value = result;
                    expression = result.toString();
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "%") {
                // Convert percentage to a fraction for calculation
                expression += "/100";
                display.value = eval(expression);
                expression = display.value;   
            } else {
                expression += buttonText;
                display.value = expression;
            }
        });
    });
});
