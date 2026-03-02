const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){

localStorage.setItem("tasks", JSON.stringify(tasks))

}

function renderTasks(){

list.innerHTML=""

tasks.forEach((task,index)=>{

const li = document.createElement("li")

li.innerHTML = `
<span class="${task.completed ? "completed" : ""}">
${task.text}
</span>

<div>

<button onclick="toggleTask(${index})">✔</button>

<button class="delete" onclick="deleteTask(${index})">X</button>

</div>
`

list.appendChild(li)

})

saveTasks()

}

function addTask(){

if(input.value==="") return

tasks.push({
text:input.value,
completed:false
})

input.value=""

renderTasks()

}

function deleteTask(index){

tasks.splice(index,1)

renderTasks()

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed

renderTasks()

}

addBtn.addEventListener("click",addTask)

renderTasks()