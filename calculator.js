let display = document.getElementById('display');
let currentInput = '';

// Function to append input to the display
function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  display.value = '';
}

// Function to calculate the result
function calculateResult() {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}

// Function to calculate the expected value based on differences and number of family members
function calculateExpectedValue() {
  let differences = parseFloat(document.getElementById('dif').value);
  let members = parseInt(document.getElementById('nbr-memb').value);
  let expectedValue = (differences / 30) / members;
  return expectedValue;
}

// Function to check if the calculated value matches the user's input
function checkAnswer() {
  let answer = parseFloat(document.getElementById('answer').value);
  let expectedValue = calculateExpectedValue();1
  
  // Check if the answer matches the expected value with a tolerance of 0.01
  if (Math.abs(answer - expectedValue) < 0.01) {
    // Display a message indicating correct answer
    document.getElementById('result-msg').innerText = 'جيد جدًا';
  } else {
    // Display a message indicating incorrect answer
    document.getElementById('result-msg').innerText = 'حاول مرة أخرى ';
  }
}

// Add event listener to the button to trigger the answer check
document.getElementById('check-answer-btn').addEventListener('click', checkAnswer);

// Function to append input from keyboard to the display
// function appendFromKeyboard(event) {
//   let keyValue = event.key;

  // Check if the pressed key is a valid input for the calculator
//   if (/[\d+\-*/().]/.test(keyValue)) {
//     appendToDisplay(keyValue);
//   } else if (keyValue === 'Enter') {
//     calculateResult();
//   } else if (keyValue === 'Backspace') {
//     currentInput = currentInput.slice(0, -1);
//     display.value = currentInput;
//   }
// }

// Add event listener to listen for keyboard input
// document.addEventListener('keydown', appendFromKeyboard);
