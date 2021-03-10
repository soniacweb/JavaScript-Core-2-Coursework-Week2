// /* eslint-disable quotes */

const content = document.querySelector("#content");

function listOfColours(colors) {
  const select = document.createElement("select");
  const p = document.createElement("p");

  colors.forEach((color) => {
    console.log(color);
    const option = document.createElement("option");
    option.innerText = color;
    select.appendChild(option);
    select.addEventListener("change", (e) => {
      const target = e.target.value;
      const p = document.querySelector("p");
      p.innerText = `You have chosen the colour ${target}`;
      p.style.color = target;
    });
  });
  content.appendChild(select);
  content.appendChild(p);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);

// displayChosenColour(colours);

// * Create a `<select>` element.
// * Create a `<p>` element.
// * Iterate through the array of colours.
// * Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
// * Each `<option>` should have a ‘click’ event listener to update the contents and colour of the `<p>` with the selected colour.
// * All of your HTML should go inside the `<div>` with the id **'content'**.
