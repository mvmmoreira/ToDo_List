//variaveis para a barra de input e o botão do html
const input = document.querySelector(".input_task")
const button = document.querySelector(".button_add_task")

//variavél que armazena a lista que sera inserida no na ul do html referencia função showList()
const finalList = document.querySelector(".list_task")

//variavél que recebera as tarefas
let taskList = []

//função para adicionar as tarefas, inseri os item na list com o value e a condição de comcluida false
function addTask(){
    taskList.push({
        tarefa: input.value,
        completed: false
    })

    input.value = ""

    showTaskList()

}


//função qu mostra a lista usando innerhtml adiciona o codigo no html, também adiciona os itens ao local storage
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

//função para deletar uma tarefa 
function deleteTask (index) {
    taskList.splice(index, 1)

    showTaskList()
}

//função indentifica uma tarefa concluida para mudar o estilo, mudando o objeto completed da taskLits de false para true
function completedTask (index) {
    taskList[index].completed = !taskList[index].completed 

    showTaskList()

}

// função para que as tarefas que foram adicionadas no local storage se apareçam inicalmente no projeto
function refreshTask(){
    const localStorageTask = localStorage.getItem("lista")

    if(localStorageTask){    
        taskList = JSON.parse(localStorageTask)
    }
    showTaskList()
}

refreshTask()

//adiciona um evento a variavel button, evento sendo o click e executa a função addTask
button.addEventListener("click", addTask)
