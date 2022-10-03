const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('ul')
const deleteallTasks = document.querySelector('#del-tasks')

form.addEventListener('submit', addTask)
taskList.addEventListener('click',deleteTask)
deleteallTasks.addEventListener('click', deleteallTasks)
function addTask(e){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createElement('x'))
    a.className = 'blue-text text-darken2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    // add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    taskInput.value = " "
    e.preventDefault()
}

function deleteTask(e){}
if(e.target.textContent == 'X'){
    if(confirm('Are you sure to delete this task?')){
        e.target.parentElement.remove()
    }
}


function deleteallTasks(e){
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}