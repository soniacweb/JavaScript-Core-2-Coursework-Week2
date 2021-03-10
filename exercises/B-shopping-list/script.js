// * You should use an unordered list: `<ul>`.
// * Each item from the array should be in a `<li>` tag.
// * All of your HTML should go inside the `<div>` with the id **"content"**.

function shoppingList(arrayOfPeople) {
  // Write your code here...

  for (let person of arrayOfPeople) {
    let content = document.querySelector("#content");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = person;
    li.style.color = "yellow";
    li.style.margin = "10px";
    li.style.padding = "10px";
    ul.style.backgroundColor = "grey";
    ul.appendChild(li);
    content.style.backgroundColor = "black";
    content.appendChild(ul);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
