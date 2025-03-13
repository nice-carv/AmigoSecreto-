//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];  // Array para armazenar os nomes dos amigos

// Função 1 - Adicionar Amigos
function adicionarAmigo() {
  //adicionar nome à lista
  const inputAmigo = document.getElementById('amigo');
  let nome = inputAmigo.value.trim();
  
  if (!nome) {
    alert("Por favor, digite o nome do amigo.");
    return; // Validação do campo de entrada
  }
  
  amigos.push(nome);  // Método push - Adiciona o nome dentro do array let ammigos []
 
  inputAmigo.value=""; // Limpa o campo de entrada ("" = vazio)
  
  inputAmigo.focus(); //Coloca focus dentro de input e digitará direto um novo nome.

// Função 2 -Atualizar a lista exibida na tela de forma dinamica.
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "" //limpar array, deixando string vazia para não repetir nomes no loop for.

// método For -declarar variavel (index) valor zero para começar contando do indice 0 e enquanto a variavel for menor que o tamanho do array amigos(length) irá incrementar +1 (index++), assim: for (let i=0; i< amigos.length; i++){ mesmo que dentro da chaves de (amigo=>{....})}.

//método ForEach -  substitui a variável index (por exemplo,amigos[index] (index = 0), verifica se index  é menor (<) que o tamanho do array ( amigos.length) e, em cada iteração, incrementa essa variável ( index++), evitando erro na manipulação de índices. O método percorre cada item do array amigos e executa a função. A função amigo=>{} (arrow function) chama cada item do array tem como parametro amigo para cada item e executa função a cada interação.

  amigos.forEach (amigo => {
    let item = document.createElement('li'); //cria elemento li
    item.textContent = amigo; // agrega um conteudo  array
    listaAmigos.appendChild(item); // adiciona como filho o item (elemento <li>; nome acrescentado ao elemento pai listaAmigos)
  } )
}

// Função 3 - Sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert ("Todos os nomes foram sorteados, atualize a página para iniciar novo sorteio"); 
    return; // quando do array amigos estiver vazio exibe alert
  }  //se o tamanho da lista for exatamente === a zero, retornará alert na tela

  let indiceAleatório = Math.floor(Math.random() * amigos.length);   // Função Matematica Math - seleciona um índice aleatório e multiplica dentro do array amigos com base no seu tamanho sorteia aleatoriamente.
  let amigoSorteado = amigos[indiceAleatório]
  
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`; // resultado do sorteio aparecerá na tela

  amigos.splice(indiceAleatório, 1); // remove elemento do array
  atualizarListaAmigos(); //atualiza lista de amigos após o sorteio
}

