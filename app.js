//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nome = inputAmigo.value.trim();

  // Valida se o campo não está vazio
  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Atualiza a lista exibida na tela
  const listaAmigos = document.getElementById('listaAmigos');
  const li = document.createElement('li');
  li.textContent = nome;
  listaAmigos.appendChild(li);

  // Limpa o campo de entrada
  inputAmigo.value = "";
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há nomes para sortear!");
    return;
  }

  // Seleciona um índice aleatório com base no tamanho do array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado do sorteio
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

