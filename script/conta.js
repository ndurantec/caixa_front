var meuFormulario = document.getElementById("conta_colegio");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_conta();
});

function capturarNomeConta() {
  const nome_conta = Number(document.getElementById("nome_conta").value);
  return nome_conta;
}

function capturarDescricaoConta() {
 const descricao_conta = Number(document.getElementById("descricao_conta").value); 
 return descricao_conta;
}


