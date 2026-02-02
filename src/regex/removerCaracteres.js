'use strict';

// Essa função remove todos os caracteres que não são números ou letras de um CEP fornecido.
export default function formatarCep(cep) {
  let cepApenasNumeros = cep.replace(/[a-zA-Z\s]/g, "");
  cepApenasNumeros = cepApenasNumeros.replace(/\D/g, "");
  return cepApenasNumeros
}