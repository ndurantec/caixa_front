var meuFormulario = document.getElementById("fluxo_colegio");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_fluxo();
});

function capturarDataFluxo() {
  const data_fluxo = Number(document.getElementById("data_fluxo").value);
  return data_fluxo;
}

function capturarOperacaoFluxo() {
  const operacao_fluxo = Number(document.getElementById("operacao_fluxo").value);
  return operacao_fluxo;
}

function capturarValorFluxo() {
  const valor_fluxo = Number(document.getElementById("valor_fluxo").value);
  return valor_fluxo;
}

function capturarDescricaoFluxo() {
  const descricao_fluxo = Number(document.getElementById("descricao_fluxo").value);
  return descricao_fluxo;
}
