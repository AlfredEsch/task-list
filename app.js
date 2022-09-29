const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('ul')

form.addEventListener('submit', addTask)
taskList.addEventListener('click',deleteTask)

function addTask(e){}

function deleteTask(e){
    if (e.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task')){
        } e.target.parentElement.remove()
    }
}