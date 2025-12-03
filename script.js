function validarFormulario() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos.");
    return false;
  }

  let formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatoEmail.test(email)) {
    alert("Digite um e-mail válido.");
    return false;
  }

  alert("Mensagem enviada com sucesso!");

  document.querySelector("form").reset();
  return false;
}
