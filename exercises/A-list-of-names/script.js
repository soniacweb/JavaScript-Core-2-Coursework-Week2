function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let person of people) {
    console.log(person);
    const h1 = document.createElement("h1");
    h1.innerText = person.name;

    const h2 = document.createElement("h2");
    h2.innerText = person.job;
    content.appendChild(h1);
    content.appendChild(h2);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

{
  /* <div id="content">
  <h1>{Name Here}</h1>
  <h2>{Job Here}</h2>
  .....
</div> */
}
