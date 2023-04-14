const btnAdicionarTarefa = document.querySelector('#btn-adicionarTarefa')
const btnSalvar = document.querySelector('#btn-salvar')
const form = document.querySelector('#form-tarefas')
const tarefasList = document.querySelector('.tarefas')
const btnEditTarefa = document.querySelector('.btn-editar')
const btnCancelar = document.querySelector('#btn-cancelar')
const modal = document.querySelector('#adicionarTarefaModal')
const aviso = document.querySelector('.aviso')
const inputs = document.querySelectorAll('form .input')
let dados = []

btnAdicionarTarefa.addEventListener('click', () => {
    iniciaModal(modal)
})

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    let tarefa = {
        id: gerarId()
    }
})

function gerarId() {

    let numeroAleatorio = Math.floor(Date.now() * Math.random())
    let numeroFormatado = numeroAleatorio.toString().substring(0, 8)

    return `task_${numeroFormatado}`
}

function iniciaModal(modal) {
    if (modal) {

        modal.classList.add('mostrar')

        modal.addEventListener('click', (event) => {
            console.log(event)
            if (event.target.id == 'fechar') {

                fechaModal(modal)

            }
        })
    }
}

function fechaModal(modal) {
    modal.classList.remove('mostrar')

    inputs.forEach(input => {
        input.value = ""
    })
}




