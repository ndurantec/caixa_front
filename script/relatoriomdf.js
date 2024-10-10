document.getElementById('relatorioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const dataEntrada = document.getElementById('data-entrada').value;
    const dataSaida = document.getElementById('data-saida').value;
    const conta = document.getElementById('conta').value;
    const operacoes = document.getElementById('operacoes').value;
    const qut = Math.floor(Math.random() * 100); // Exemplo de valor para QUT
    const entrada = Math.floor(Math.random() * 1000); // Exemplo de valor para Entrada
    const saida = Math.floor(Math.random() * 1000); // Exemplo de valor para Saída

    // Cria uma nova linha para a tabela
    const tbody = document.getElementById('relatorio-tbody');
    const newRow = document.createElement('tr');

    // Adiciona células à nova linha
    newRow.innerHTML = `
        <td>${dataEntrada}</td>
        <td>${conta}</td>
        <td>${qut}</td>
        <td>${entrada}</td>
        <td>${saida}</td>
    `;

    // Adiciona a nova linha ao corpo da tabela
    tbody.appendChild(newRow);

    // Limpa os campos do formulário
    this.reset();
});
