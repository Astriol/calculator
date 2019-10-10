// Simple arithmetic calculator app

/**
 3. Log the value of the select and the inputs.
 */
const calculator = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  remainder(a, b) {
    return a % b;
  }
};

console.log(calculator.add(1, 5));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

// Use an anonymous callback function as the 2nd argument.
form.addEventListener("submit", function(event) {
  //Prevent the default brwser behavioe -- DON'T submit
  event.preventDefault();
  console.log(num1.value, num2.value, select.value);
});
