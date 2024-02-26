document.addEventListener("DOMContentLoaded", function () {
  // Select the display element
  var display = document.querySelector(".display");

  // Function to update the display
  function updateDisplay(value) {
    if (display.innerText === "0") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }


  // Function to calculate the result
  function calculateResult() {
    try {
      display.innerText = eval(display.innerText);
    } catch (e) {
      display.innerText = "Error";
    }
  }

  // Function to clear the display
  function clearDisplay() {
    display.innerText = "0";
  }

  // Add click event listeners to each button
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = this.innerText;

      // Check the value of the button clicked
      switch (value) {
        case "=":
          calculateResult();
          break;
        case "c":
          clearDisplay();
          break;
        default:
          updateDisplay(value);
          break;
      }
    });
  });
});
