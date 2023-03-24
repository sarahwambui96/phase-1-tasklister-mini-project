document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
  e.preventDefault()
  doTask(e.target.new_task_description.value)
  form.reset()
 })
});
function doTask(todo){
  //console.log(todo)
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = ' x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function deleteTask(e){
  e.target.parentNode.remove()
}

