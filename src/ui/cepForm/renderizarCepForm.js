'use strict';
// Este arquivo é responsável por renderizar o formulário com os dados retornados da API ViaCEP.

let formulario = document.getElementsByClassName('addressFields');


function renderizarCepForm(adress) {
  for (let i = 0; i < formulario.length; i++) {
    formulario[i].classList.remove('d-none');
  }
  document.querySelector('input[placeholder="Logradouro"]').value = adress.logradouro;
  document.querySelector('input[placeholder="Bairro"]').value = adress.bairro;
  document.querySelector('input[placeholder="Cidade"]').value = adress.localidade;
  document.querySelector('input[placeholder="Estado"]').value = adress.uf;
}


function removerCepForm() {
  for (let i = 0; i < formulario.length; i++) {
    formulario[i].classList.add('d-none');
  }
}

export { renderizarCepForm, removerCepForm };