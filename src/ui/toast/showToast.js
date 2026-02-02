'use strict';
// Esse arquivo é responsável por controlar os toasts de sucesso e erro na aplicação.

const toasterSucess = document.getElementById('toastSucess');
const toasterError = document.getElementById('toastError');

function mostrarToastSucesso() {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toasterSucess);
  toastBootstrap.show();

}

function mostrarAlerta() {
  let container = document.getElementById('containerAlerta');

  let elementoPai = document.createElement('div');
  elementoPai.className = 'alert alert-danger alert-dismissible fade show';
  elementoPai.id = 'alertaCep';
  elementoPai.setAttribute('role', 'alert');
  elementoPai.innerHTML = `
  O CEP deve ter 8 digitos, preencha o campo devidamente!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
`;

  container.appendChild(elementoPai);

  window.setTimeout(function () {
    elementoPai.remove();
  }, 3000);

}

function mostrarToastErroRequisicao() {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toasterError);
  toastBootstrap.show();
}

function mostrarSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('d-none');
}
function esconderSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.add('d-none');
}

export { mostrarToastSucesso, mostrarAlerta, mostrarToastErroRequisicao, mostrarSpinner, esconderSpinner };