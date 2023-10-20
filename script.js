// Get the calculator elements
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

// Add click event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// Function to handle button clicks
function handleClick(event) {
  const buttonText = event.target.innerText;
  
  if (buttonText === "AC") {
    // Clear the input
    input.value = "";
  } else if (buttonText === "DEL") {
    // Delete the last character from input
    input.value = input.value.slice(0, -1);
  } else if (buttonText === "=") {
    // Evaluate the expression in the input
    try {
      input.value = eval(input.value);
    } catch (error) {
      input.value = "Error";
    }
  } else {
    // Append the clicked button's text to the input
    input.value += buttonText;
  }
}
