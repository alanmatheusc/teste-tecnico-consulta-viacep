'use strict';
import formatarCep from "../regex/removerCaracteres.js";
import { mostrarAlerta } from "../ui/toast/toastController.js";



function ehComprimentoValido(e) {
  let cepInput = document.getElementById('cepInput').value;
  cepInput = formatarCep(cepInput);
  e.preventDefault();
  if (cepInput.length !== 8) {
    mostrarAlerta();
    return false;
  }
  return true;
}

export { ehComprimentoValido };