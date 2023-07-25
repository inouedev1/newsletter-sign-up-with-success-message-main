function exibirMensagemValidacao(mensagem) {
  const mensagemElemento = document.getElementById("mensagem-validacao");

  if (mensagem) {
    mensagemElemento.innerHTML =
      mensagem +
      '<span class="dismiss-button" onclick="fecharMensagem()">Dismiss</span>';
    mensagemElemento.className = "mensagem-validacao valido";
    mensagemElemento.style.display = "block";
    everything.style.display = "none";
    resultado.style.display = "none";
  } else {
    resultado.innerHTML = "Valid email required.";
    resultado.style.color = "red";
    resultado.style.display = "block";
    mensagemElemento.style.display = "none";
    everything.style.display = "block";
  }
}

function fecharMensagem() {
  const mensagemElemento = document.getElementById("mensagem-validacao");
  mensagemElemento.style.display = "none";
  everything.style.display = "block";
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const msg =
    "<h1>Thanks for subscribing</h1>" +
    "<p> A confirmation email has been sent to " +
    email +
    ". Please open it and click the button inside to confirm your subscription.</p>";
  exibirMensagemValidacao(regex.test(email) ? msg : undefined);

  // if (regex.test(email)) {
  //   var mensagem =
  //     "<h1>Thanks for subscribing</h1>" +
  //     "<p> A confirmation email has been sent to " +
  //     email +
  //     ". Please open it and click the button inside to confirm your subscription.</p>";
  //   exibirMensagemValidacao(mensagem, true);
  // } else {
  //   resultado.innerHTML = "Valid email required.";
  //   resultado.style.color = "red";
  // }
}
