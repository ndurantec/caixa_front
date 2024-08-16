var meuFormulario = document.getElementById("operacao_colegio");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
 operacao_colegio();
});

function capturarSegundoNumeroInteiro() {
 const capturar_nome_operacao = Number(document.getElementById("nome_operacao").value); 
 return capturar_nome_operacao;
}