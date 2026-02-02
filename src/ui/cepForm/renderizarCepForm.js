function renderizarCepForm(adress) {
  let formulario = document.getElementsByClassName('addressFields');
  for (let i = 0; i < formulario.length; i++) {
    formulario[i].classList.remove('d-none');
  }
  document.querySelector('input[placeholder="Logradouro"]').value = adress.logradouro;
  document.querySelector('input[placeholder="Bairro"]').value = adress.bairro;
  document.querySelector('input[placeholder="Cidade"]').value = adress.localidade;
  document.querySelector('input[placeholder="Estado"]').value = adress.uf;
}

export { renderizarCepForm };