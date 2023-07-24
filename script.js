function exibirMensagemValidacao(mensagem, valido) {
  var mensagemElemento = document.getElementById("mensagem-validacao");

  if (valido) {
    mensagemElemento.innerHTML = mensagem + '<span class="dismiss-button" onclick="fecharMensagem()">Dismiss</span>';
    mensagemElemento.className = "mensagem-validacao valido";
    mensagemElemento.style.display = "block";
    everything.style.display = "none";
    resultado.style.display = "none";
  } else {
    mensagemElemento.style.display = "none";
  }
}

function fecharMensagem() {
  var mensagemElemento = document.getElementById("mensagem-validacao");
  mensagemElemento.style.display = "none";
  everything.style.display = "block";
}

function validarEmail() {
  var email = document.getElementById("email").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    var mensagem = '<h1>Thanks for subscribing</h1>' + '<p> A confirmation email has been sent to ' + email + '. Please open it and click the button inside to confirm your subscription.</p>';
    exibirMensagemValidacao(mensagem, true);
  } else {
    resultado.innerHTML = "Valid email required.";
    resultado.style.color = "red";
  }
}