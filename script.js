let button = document.querySelector(".button_add_task")
let input = document.querySelector(".input_task")
const listacompleta = document.querySelector(".lista_de_tarefas")

let listaTarefas = []

function mostrarTarefas(){
    
    let novaLi = ''
     listaTarefas.forEach( (item, index) => {

     novaLi = novaLi + `
        <li class="tarefas ${item.concluida && "done"}"">
            <img src="/img/checked.png" alt="check_img" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="/img/trash.png" alt="_trash_img" onclick="deletarItem(${index})">
        </li>
        `
     })
    
    listacompleta.innerHTML = novaLi  

    localStorage.setItem('lista', JSON.stringify(listaTarefas))

}


function addTarefa(){
    listaTarefas.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ""

    mostrarTarefas()
}

function deletarItem(index){
    listaTarefas.splice(index, 1)

    mostrarTarefas()


}

function concluirTarefa(index){
    listaTarefas[index].concluida = !listaTarefas[index].concluida

    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')
    
    if(tarefasLocalStorage){
        listaTarefas = JSON.parse(tarefasLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', addTarefa)