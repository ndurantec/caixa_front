document.addEventListener("DOMContentLoaded", function() {
  carregarComboConta();
  carregarComboOperacao();
  
});

function salvar() {
  const conta = document.getElementById('Contas').value;
  const operacao = document.getElementById('Operacoes').value;
  const data_fluxo = document.getElementById('data_fluxo').value;
  const valor_fluxo = document.getElementById('valor_fluxo').value;
  const descricao_fluxo = document.getElementById('descricao_fluxo').value;

  console.log(data_fluxo)
  console.log(valor_fluxo)
  console.log(descricao_fluxo)
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch('http://localhost:8080/fluxo/insert' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ data: data_fluxo, valor: valor_fluxo, descricao: descricao_fluxo, conta: { id: conta }, operacao: { id: operacao}}),

    headers: headers

    //Aqui inicia função then
  }).then(response => {
    if(response.ok) {
      return response.json(); //transforma a resposta em JSON
    } else {
      //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');
      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  .then(data => {
    //aqui você pode acessar o 'id' retornado do back end
    const id_fluxo = data.id;
    console.log('ID do registro salvo:', id_fluxo);

    //se quiser armazenar o ID no localStorage
    localStorage.setItem('id_fluxo', id_fluxo);

      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso.html
      alert("fluxo salvo com sucesso");    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
}
    
function consultar() {
  const data = document.getElementById('data_fluxo').value;
  
  fetch(`http://127.0.0.1:8080/fluxo/buscarPorData?data=${data}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao buscar fluxos');
    }
    return response.json();
})
.then(ids => {
    console.log('IDs dos fluxos encontrados:', ids);

    // Armazena os IDs no localStorage
    localStorage.setItem('fluxosIds', JSON.stringify(ids));

    console.log('IDs dos fluxos foram salvos no localStorage');
})
.catch(error => {
    console.error('Erro:', error);
});
}

//botao de voltar 
document.addEventListener('DOMContentLoaded', function() {
const link = document.getElementById('contabt');
localStorage.clear();

// Define o destino do link dinamicamente
link.href = 'home.html'; // Substitua pelo URL da página desejada
});

function alterar() {
  const conta = document.getElementById('Contas').value;
  const operacao = document.getElementById('Operacoes').value;
  const data_fluxo = document.getElementById('data_fluxo').value;
  const valor_fluxo = document.getElementById('valor_fluxo').value;
  const descricao_fluxo = document.getElementById('descricao_fluxo').value;

  //se quiser armazenar o ID no localStorage
  const ID = localStorage.getItem('id_fluxo');


  console.log(data_fluxo)
  console.log(valor_fluxo)
  console.log(descricao_fluxo)
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch(`http://127.0.0.1:8080/fluxo/${ID}` ,{

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ data: data_fluxo, valor: valor_fluxo, descricao: descricao_fluxo, conta: { id: conta }, operacao: { id: operacao}}),

    headers: headers

   //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso3.html'   
      alert("alterado com sucesso essa merda") 
    } else {
      //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');

      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
   

}
function apagar() {
   //se quiser armazenar o ID no localStorage
 const ID = localStorage.getItem('id_fluxo');

 const conta = document.getElementById('Contas').value;
 const operacao = document.getElementById('Operacoes').value;
 const data_fluxo = document.getElementById('data_fluxo').value;
 const valor_fluxo = document.getElementById('valor_fluxo').value;
 const descricao_fluxo = document.getElementById('descricao_fluxo').value;

  console.log(data_fluxo)
  console.log(valor_fluxo)
  console.log(descricao_fluxo)
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

fetch(`http://localhost:8080/fluxo/${ID}` ,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({}),

    headers: headers

   //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso4.html
      alert("fluxo apagado com sucesso");       
    } else {
      //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');

      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
   

}

function carregarComboConta() {
 
  //console.log('Carregou a página e chamou a função');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch('http://127.0.0.1:8080/conta/findAll' ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

    headers: headers

    
  }).then(response => response.json())
  .then(data => {
      const comboBox = document.getElementById('Contas');
      data.forEach(conta => {
          const option = document.createElement('option');
          option.value = conta.id;
          option.textContent = conta.nome;
          comboBox.appendChild(option);
      });
  })
  .catch(error => console.error('Erro ao carregar locais:', error));
   

}

function carregarComboOperacao() {
 
  //console.log('Carregou a página e chamou a função');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch('http://127.0.0.1:8080/operacao/findAll' ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

    headers: headers

    
  }).then(response => response.json())
  .then(data => {
      const comboBox = document.getElementById('Operacoes');
      data.forEach(operacao => {
          const option = document.createElement('option');
          option.value = operacao.id;
          option.textContent = operacao.nome;
          comboBox.appendChild(option);
      });
  })
  .catch(error => console.error('Erro ao carregar locais:', error));
   

}

//botao de voltar 
document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('contabt');

  // Define o destino do link dinamicamente
  link.href = 'home.html'; // Substitua pelo URL da página desejada
});

function goBack() {
  window.history.back();
  localStorage.clear();
}