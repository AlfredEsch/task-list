const form = document.querySelector('form')
const taskInput = document.querySelector('#task')

form.addEventListener('submit', addTask)

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
