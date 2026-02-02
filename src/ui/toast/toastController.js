'use strict';

const toasterSucess = document.getElementById('toastSucess');

function mostrarToastSucesso() {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toasterSucess);
  toastBootstrap.show();

}


export { mostrarToastSucesso };