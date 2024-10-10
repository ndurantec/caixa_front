function salvar() {
  const operacao = document.getElementById('nome_operacao').value;
  console.log(nome_operacao)

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch('http://localhost:8080/operacao/insert' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde veocê deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: operacao }),

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
    const id_operacao = data.id;
    console.log('ID do registro salvo:', id_operacao);

    //se quiser armazenar o ID no localStorage
    localStorage.setItem('id_operacao', id_operacao);

      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      window.location.href = 'sucesso.html'    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
   

}

function consultar() {
  const operacao = document.getElementById('nome_operacao').value;
  console.log(nome_operacao)

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch('http://127.0.0.1:8080/operacao/findByNome' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde veocê deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: operacao }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {
      return response.text(); // Usamos text() para lidar com retorno direto (não é JSON)
    } else {
      console.error('Erro na resposta da API');
      throw new Error('Erro ao tentar buscar a conta');
    }
  })
  .then(id_operacao => {
    console.log("ID da conta recebida:", id_operacao); // Aqui o id é diretamente o retorno

    if (id_operacao) {
      localStorage.setItem('id_operacao', id_operacao);
      alert("item achado com sucesso! agora é possivel deletar ou deletar a operacao selecionada ");
    } else {
      console.error("ID não encontrado na resposta");
    }
  })
  .catch(error => {
    console.error("Erro capturado no catch:", error);
  });
}

function alterar() {

  const ID = localStorage.getItem('id_operacao');
  
  const operacao = document.getElementById('nome_operacao').value;
  console.log(nome_operacao)

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch(`http://localhost:8080/operacao/${ID}` ,{

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde veocê deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: operacao }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      window.location.href = 'sucesso3.html'    
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
 const ID = localStorage.getItem('id_operacao');

  const operacao = document.getElementById('nome_operacao').value;
  console.log(nome_operacao)

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch(`http://localhost:8080/operacao/${ID}`,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde veocê deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: operacao }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      window.location.href = 'sucesso4.html'    
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