const input = document.querySelector(".input_task")
const button = document.querySelector(".button_add_task")

const finalList = document.querySelector(".list_task")

let taskList = []


function addTask(){
    taskList.push({
        tarefa: input.value,
        completed: false
    })

    input.value = ""

    showTaskList()

}

function showTaskList(){
    let newLi = ""

    taskList.forEach((tarefa, index) =>{
        newLi = newLi + `

                    <li class="task ${tarefa.completed && "done"}">
                        <img src="./img/checked.png" alt="checked" onclick="completedTask(${index})"> 
                        <p>${tarefa.tarefa}</p>
                        <img src="./img/trash.png" alt="Lixeira" onclick="deleteTask(${index})">
                    </li>
                `
    })

    finalList.innerHTML = newLi

    localStorage.setItem("lista", JSON.stringify(taskList))
    
}

function deleteTask (index) {
    taskList.splice(index, 1)

    showTaskList()
}

function completedTask (index) {
    taskList[index].completed = !taskList[index].completed 

    showTaskList()

}

function refreshTask(){
    const localStorageTask = localStorage.getItem("lista")

    if(localStorageTask){    
        taskList = JSON.parse(localStorageTask)
    }
    showTaskList()
}

refreshTask()
button.addEventListener("click", addTask)
