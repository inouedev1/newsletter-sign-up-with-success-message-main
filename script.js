function exibirMensagemValidacao(mensagem, valido) {
  const mensagemElemento = document.getElementById("mensagem-validacao");

  if (valido) {
    mensagemElemento.innerHTML = mensagem + '<span class="dismiss-button" onclick="fecharMensagem()">Dismiss message</span>';
    mensagemElemento.className = "mensagem-validacao valido";
    mensagemElemento.style.display = "block";
    everything.style.display = "none";
    resultado.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "block";
  } else {
    mensagemElemento.style.display = "none";
  }
}

function fecharMensagem() {
  const mensagemElemento = document.getElementById("mensagem-validacao");
  mensagemElemento.style.display = "none";
  everything.style.display = "block";
  img1.style.display = "block";
  img2.style.display = "none";
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    const mensagem = '<h1>Thanks for subscribing</h1>' + '<p> A confirmation email has been sent to <strong>' + email + 
    '</strong>. Please open it and click the button inside to confirm your subscription.</p>';
    exibirMensagemValidacao(mensagem, true);
  } else {
    resultado.innerHTML = "Valid email required.";
    resultado.style.color = "red";
    resultado.style.display = "block";

  }
}