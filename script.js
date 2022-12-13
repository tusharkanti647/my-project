const inputs = document.querySelectorAll(".otp-input");

const moveFocusToPreviousInput = (eventOriginationIndex) => {
  if (eventOriginationIndex === 0) {
    return;
  }

  const inputToFocus = inputs[eventOriginationIndex - 1];
  inputToFocus.focus();
};

const moveFocusToNextInput = (eventOriginationIndex) => {
  if (eventOriginationIndex === 5) {
    return;
  }

  const inputToFocus = inputs[eventOriginationIndex + 1];
  inputToFocus.focus();
};

const validInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"];


const onInputChange = (event) => {

  if(!validInputs.includes(event.key)){
    return;
  }

  const input = event.target;
  const index = parseInt(input.getAttribute("data-index"));

  

  
  if (event.key === "Backspace") {
    moveFocusToPreviousInput(index);
    return;
  }
  
  moveFocusToNextInput(index);
};

inputs.forEach((input) => {
  input.addEventListener("keyup", onInputChange);
});

inputs.forEach((input) =>{
  input.addEventListener("keydown",(event) =>{
    if(!validInputs.includes(event.key)){
      event.preventDefault();
    }
  })
})
