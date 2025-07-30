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

function sortearAmigo() {
    if (amigos.length !== 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length)
        let nome = amigos[indiceSorteado];
        console.log(indiceSorteado)
        console.log(nome)
        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${nome}`;
    }
}