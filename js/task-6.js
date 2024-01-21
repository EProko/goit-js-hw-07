const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", valueCheck);
function valueCheck() {
  let numberInput = input.value;
  if (numberInput >= 1 && numberInput <= 100) {
    createBoxes(numberInput);
  }
}
function createBoxes(amount) {
  let divSize = [];
  let px = 20;
  for (let i = 0; i < amount; i++) {
    divSize.push((px += 10));
  }
  const divBox = divSize
    .map(
      (size) =>
        `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} "></div>`
    )
    .join(" ");
  boxes.innerHTML = divBox;
}
btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
