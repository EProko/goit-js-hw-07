const numberOfCategoties = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategoties.length}`);
numberOfCategoties.forEach((element) => {
  const title = element.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const ulLength = element.querySelectorAll("li");
  console.log(`Elements: ${ulLength.length}`);
});
