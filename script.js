// SELECTING ELEMENTS
let addTaskBtn = document.querySelector("#addTaskBtn");
let taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", createTask);

function createTask() {
  // GETTING THE VALUE OF INPUT FIELD
  let inputTaskField = document.querySelector("#inputTaskField").value;
  if (!inputTaskField) {
    alert("ERROR!");
    return;
  }

  // CREATING ELEMENTS AND ASSIGNING CLASSES
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("taskDiv");
  taskList.appendChild(taskDiv);

  let textParagraph = document.createElement("p");
  textParagraph.classList.add("textParagraph");

  let deleteButton = document.createElement("a");
  deleteButton.classList.add("fa-solid", "fa-trash");

  let checkboxToDo = document.createElement("input");
  checkboxToDo.type = "checkbox";
  checkboxToDo.classList.add("checkboxToDo");

  taskDiv.appendChild(checkboxToDo);
  taskDiv.appendChild(textParagraph);
  taskDiv.appendChild(deleteButton);
  textParagraph.textContent = inputTaskField;
  // inputTaskField.value = "";
  // inputTaskField.textContent = "";
  document.querySelector("#inputTaskField").value = "";

  // DELETING THE TEXT IN INPUT FIELD

  deleteButton.addEventListener("click", onClickDelete);
  checkboxToDo.addEventListener("click", onClickCompleted);
}

function onClickCompleted(event) {
  let completedTask = event.target.parentElement;
  completedTask.classList.toggle("completedTask");
}
function onClickDelete(event) {
  let createdItem = event.target.parentElement;
  let itemParent = createdItem.parentElement;
  itemParent.removeChild(createdItem);
  // Go brise noviot element od negoviot parent element
}

// namesto completed/deleted da bidat icons! - fontawesome za ikoni koristenje!
