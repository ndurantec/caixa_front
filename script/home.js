document.addEventListener("DOMContentLoaded", function() {
    buscarSomaValores()
    
  });


document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('contabt');

    // Define o destino do link dinamicamente
    link.href = 'conta.html'; // Substitua pelo URL da página desejada
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('fluxobt');

    // Define o destino do link dinamicamente
    link.href = 'fluxo.html'; // Substitua pelo URL da página desejada
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('operacaobt');

    // Define o destino do link dinamicamente
    link.href = 'operacao.html'; // Substitua pelo URL da página desejada
});

document.addEventListener('DOMContentLoaded', function() {

    const link = document.getElementById('loginbt');

    // Define o destino do link dinamicamente
    link.href = 'login.html'; // Substitua pelo URL da página desejada
});

    const link = document.getElementById('relatoriobt');

    // Define o destino do link dinamicamente
    link.href = 'relatorios.html'; // Substitua pelo URL da página desejada
    ;

    function buscarSomaValores() {
        fetch('http://127.0.0.1:8080/fluxo/somaValores')
            .then(response => response.json())
            .then(soma => {
                console.log("Soma dos valores dos fluxos:", soma);
                // Exibe a soma na tela, por exemplo, em um elemento HTML
                document.getElementById('somaValores').innerText = "Saldo Total: R$ " + soma.toFixed(2);
            })
            .catch(error => console.error("Erro ao buscar soma dos valores:", error));
    }
    