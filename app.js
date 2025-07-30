//Declaração de variáveis
let amigos = [];


//Funçoes
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == 0) {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        console.log(amigos);
        limparCampo();
        listarAmigos();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos');

    //limpar a lista antes de adicionar itens
    lista.innerHTML = '';

    //Listando amigos e criando um <li>
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

