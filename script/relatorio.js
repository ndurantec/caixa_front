document.getElementById('form-relatorio').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o reload da página

    // Coletar os dados do formulário
    const dataInicio = document.getElementById('data_inicio').value;
    const dataFim = document.getElementById('data_fim').value;
    const operacao = document.getElementById('operacao').value;

    console.log(dataInicio);
    
    console.log(dataFim);
    
    console.log(operacao);

    // Requisição para a API (ajustar URL conforme necessário)
    fetch(`http://127.0.0.1:8080/fluxo/buscarPorPeriodo?dataInicio=${dataInicio}&dataFim=${dataFim}&operacao=${operacao}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na rede: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
const relatorioContainer = document.getElementById('tabela-relatorio');
const totalContainer = document.getElementById('total'); // Elemento para exibir o total

// Verifica se o elemento existe
if (!relatorioContainer || !totalContainer) {
    console.error('Elemento com id "relatorio" ou "total" não encontrado.');
    return;
}

// Limpa o container antes de adicionar novos dados
relatorioContainer.innerHTML = '';

// Variável para somar o total
let total = 0;

// Percorre os resultados
data.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
        <p>Data: ${item.data}</p>
        <p>Conta: ${item.conta.nome}</p>
        <p>Operação: ${item.operacao.nome}</p>
        <p>Valor: ${item.valor}</p>
        <p>Descrição: ${item.descricao}</p>
        <hr>
    `;

    relatorioContainer.appendChild(div);

    // Soma o valor atual ao total
    total += item.valor;
});

// Exibe o total na tela
totalContainer.innerHTML = `<strong>R$ ${total.toFixed(2)}</strong>`;
})
.catch(error => console.error('Erro ao buscar dados do relatório:', error));
});


function atualizarRelatorio(data) {
    let relatorioDiv = document.getElementById('tabela-relatorio');
    relatorioDiv.innerHTML = '';  // Limpa o conteúdo anterior

    // Para cada item retornado no relatório, cria um elemento de resultado
    data.forEach(item => {
        // Cria um novo div para cada registro do relatório
        let registroDiv = document.createElement('div');
        registroDiv.classList.add('registro');  // Adiciona a classe de estilo

        // Formata o conteúdo com os dados da operação
        registroDiv.innerHTML = `
            <p>Data: ${item.data}</p>
            <p>Operação: ${item.operacao.nome}</p>
            <p>Valor: R$ ${item.valor}</p>
        `;

        // Adiciona o registro ao div do relatório
        relatorioDiv.appendChild(registroDiv);
    });

    // Calcular e exibir o total
    let total = data.reduce((acc, item) => acc + item.valor, 0);
    document.getElementById('total').innerText = `Total: R$ ${total}`;
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