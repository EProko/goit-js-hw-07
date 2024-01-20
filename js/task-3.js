const Input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const listenerForInput = (event) => {
  if (Input.textContent.trim() != " ") {
    output.textContent = event.currentTarget.value.trim();
  } else {
    output.textContent = "Anonymous";
  }
};
Input.addEventListener("input", listenerForInput);
