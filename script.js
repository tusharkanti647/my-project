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

const onInputChange = (event) => {
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
