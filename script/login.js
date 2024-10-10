document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === "" || password === "") {
        message.textContent = "Por favor, preencha todos os campos.";
    } else {
        message.textContent = "Login realizado com sucesso!";
        // Aqui você pode adicionar a lógica para autenticação
    }
});

// Lógica para o botão "Entrar com Google"
document.getElementById('googleLogin').addEventListener('click', function() {
    alert("Funcionalidade de login com Google ainda não implementada.");
});

// Lógica para "Esqueceu sua senha?"
document.getElementById('forgotPassword').addEventListener('click', function() {
    alert("Funcionalidade de recuperação de senha ainda não implementada.");
});

//botao de voltar 
document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('loginbt');
  
    // Define o destino do link dinamicamente
    link.href = 'home.html'; // Substitua pelo URL da página desejada
  });
  
  function goBack() {
    window.history.back();
    localStorage.clear();
  }
