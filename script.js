let tarefas = []

function adicionarTarefa() {
    // Guarda o input do usuário em uma variável
    const inputTarefa = document.getElementById("inputTarefa")
    // .trim() tira os espaços em branco do início e do final
    let tarefa = inputTarefa.value.trim()

    // const: não muda de valor
    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la à sua lista!"
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "#A34743";
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "#28A745";

        tarefas.push(tarefa)
        renderizarTarefas()
    }
    inputTarefa.value = ""
  }

  function renderizarTarefas() {
    // Guarda a lista não ordenada em uma variável
    const listaTarefas = document.getElementById("listaTarefas")

    // Limpar a lista (apagar todos os li's que foram criados anteriormente)
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++) {
        // Criando o li:
        let novaTarefa = document.createElement("li")

        // Adiciona o valor do input no li criado
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"

        // function() { removerTarefa() }
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)

        // Adiciona o novo li à lista 
        listaTarefas.appendChild(novaTarefa)
    }
  }

  function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
  }

  function editarTarefa(i) {
    // prompt: alert() com uma caixa de texto
    let tarefaEditada = prompt("Edite a tarefa:")

    if(tarefaEditada.trim() != "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
  }

  function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    
    const mensagem =  document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
  }