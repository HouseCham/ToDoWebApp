const mainDiv = document.getElementById("app");
const addTaskBtn = document.querySelector(".add-task");

addTaskBtn.addEventListener("click", createTask);
mainDiv.addEventListener("click", deleteCheck);

function createTask(event) {
  event.preventDefault();

  /* Div */
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  /* Title, description and comments */
  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "title");
  titleInput.type = "text";
  titleInput.placeholder = "Insert title";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.type = "text";
  descriptionInput.placeholder = "Description";

  const commentsInput = document.createElement("textarea");
  commentsInput.setAttribute("id", "comments");
  commentsInput.type = "text";
  commentsInput.placeholder = "Comments";

  taskDiv.appendChild(titleInput);
  taskDiv.appendChild(descriptionInput);
  taskDiv.appendChild(commentsInput);

  /* Priority */
  const priorityTitle = document.createElement("h4");
  priorityTitle.classList.add("priority");
  priorityTitle.innerText = "Priority";
  taskDiv.appendChild(priorityTitle);

  const selectPriority = document.createElement("select");
  selectPriority.classList.add("priorityS");
  selectPriority.innerHTML =
    "<option id='high'>High</option><option id='medium'>Medium</option><option id='low'>Low</option>";

  taskDiv.appendChild(selectPriority);

  /* Due date */
  const dateTitle = document.createElement("h4");
  dateTitle.classList.add("inputDate");
  dateTitle.innerText = "Due date";
  taskDiv.appendChild(dateTitle);

  const datePicker = document.createElement("input");
  datePicker.classList.add("inputDate");
  datePicker.type = "date";
  taskDiv.appendChild(datePicker);

  /* Done and delete btns */
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("doneBtn");
  doneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  taskDiv.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  taskDiv.appendChild(deleteBtn);

  mainDiv.appendChild(taskDiv);
}

function deleteCheck(event) {
  const item = event.target;

  //delete
  if (item.classList[0] === "deleteBtn") {
    const confirmDelete = confirm("Are you sure you wish to delete the task?");
    if (confirmDelete === true) {
      const taskDone = item.parentElement;
      taskDone.classList.add("fall");
      taskDone.addEventListener("transitionend", function () {
        taskDone.remove();
      });
    }
  }

  //done mark
  if (item.classList[0] === "doneBtn") {
    const taskDone = item.parentElement;
    taskDone.classList.toggle("completed");
  }
}
