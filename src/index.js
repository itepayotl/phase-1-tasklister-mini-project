document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
})

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  console.log(e)
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)
  console.log(priorityLevel)
 

displayTask(task, priorityLevel)
}
function displayTask(task, priorityLevel ){ 
   const taskUl = document.getElementById("tasks")
  
   const taskLi = document.createElement("li")
   const deleteButton = document.createElement("button")
   deleteButton.textContent = "x"
   deleteButton.addEventListener("click", deleteTask)
   taskLi.textContent = task + " "
   taskLi.style.color = getPriorityColor(priorityLevel)
   taskLi.appendChild(deleteButton)
   taskUl.appendChild(taskLi)
} 
function deleteTask(e) {
  console.log(e)
  e.target.parentNode.remove()
}
function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red"
  } else if (priorityLevel === 2) {
    return "blue"
  } else {
    return "green"
  }
}