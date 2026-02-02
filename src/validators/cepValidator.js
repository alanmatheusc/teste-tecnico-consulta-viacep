'use strict';
import formatarCep from "../regex/removerCaracteres.js";
import { mostrarToastSucesso } from "../ui/toast/toastController.js";
let botaoBuscar = document.getElementById('submit_button').addEventListener('click', ehComprimentoValido);

function ehComprimentoValido(e) {
  let cepInput = document.getElementById('cepInput').value;
  cepInput = formatarCep(cepInput);
  e.preventDefault();
  if (cepInput.length !== 8) {
    return false;
  }
  mostrarToastSucesso();
  return cepInput;
}