function exibirMensagemValidacao(mensagem, valido) {
  const mensagemElemento = document.getElementById("mensagem-validacao");

  if (valido) {
    mensagemElemento.innerHTML = mensagem + '<button class="dismiss-button" onclick="fecharMensagem()">Dismiss message</button>';
    mensagemElemento.className = "mensagem-validacao valido";
    mensagemElemento.style.display = "block";
    everything.style.display = "none";
    resultado.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "block";
    imgmobile.style.display = "none"
  } else {
    mensagemElemento.style.display = "none";
  }
}

function fecharMensagem() {
  window.location.href = 'index.html';
}

function validarEmail() {
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let mailbox = document.getElementById("email");
  let resultado = document.getElementById("resultado");

  if (regex.test(email)) {
    
    const mensagem = '<h1>Thanks for <br>subscribing!</h1>' + '<p> A confirmation email has been sent to <br><strong>' + email + '</strong>. Please open it and click the button inside to confirm your subscription.</p>';
    exibirMensagemValidacao(mensagem, true);
    emailInput.style.borderColor = ""; 
    mailbox.style.borderColor = ""; 
    resultado.style.display = "none"; 
    mailbox.style.backgroundColor = "";
  } else {
    
    emailInput.style.borderColor = "hsl(4, 100%, 72%)"; 
    mailbox.style.borderColor = "#ffb0aa";
    resultado.innerHTML = "Valid email required.";
    resultado.style.color = "red";
    resultado.style.display = "block";
    mailbox.style.backgroundColor = "hsla(4, 85%, 79%, 0.644)"
  }
}

 