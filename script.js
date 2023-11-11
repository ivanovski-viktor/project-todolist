// console.log("Hi!");

// const person = {
//   age: 23,
//   name: "Jon",
//   address: {
//     city: 1,
//     place: "b",
//   },
// };

// console.log(person);
// // Object.freeze(person); - Freezes object and makes it immutable(values cannot be changed)

// person.age = 30;

// console.log(JSON.stringify(person.address));

let addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.addEventListener("click", createTask);

function createTask() {
  let taskList = document.querySelector("#taskList");
  let inputTaskField = document.querySelector("#inputTaskField").value;
  if (!inputTaskField) {
    alert("ERROR!");
    return;
  }
  let task;
  task = inputTaskField;

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("taskDiv");
  taskList.appendChild(taskDiv);

  let checkboxToDo = document.createElement("input");
  checkboxToDo.type = "checkbox";
  checkboxToDo.classList.add("checkboxToDo");

  let textStyle = document.createElement("li");
  textStyle.classList.add("textStyle");

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "X";

  taskDiv.appendChild(checkboxToDo);
  taskDiv.appendChild(textStyle);
  taskDiv.appendChild(deleteButton);

  textStyle.textContent = task;
  deleteButton.addEventListener(
    "click",
    () => (taskDiv.style.display = "none")
  );
}
