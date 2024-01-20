const Input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const listenerForInput = (event) => {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
};
Input.addEventListener("input", listenerForInput);
