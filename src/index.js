document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const newTaskDescription = document.getElementById('new-task-description')

  const myTodos = document.getElementById('list')

document.getElementById('create-task-form').
addEventListener('submit', (e) => createTask(e))

const createTask = (e) => {
  e.preventDefault()

  const newList = document.createElement('li')

  newList.textContent= newTaskDescription.value

  createDeletebtn(newList);

  myTodos.appendChild(newList)
} 

});
const createDeletebtn = (task) => {
const button = document.createElement('button')
button.textContent = "Delete"

task.appendChild(button)

button.addEventListener('click', (e) =>{
  const cleatItems = e.target.parentElement
  const clearItems = e.target.parentElement
  console.log(clearItems)
  clearItems.remove()
})

}
