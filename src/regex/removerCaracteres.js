'use strict';

export default function formatarCep(cep) {
  let cepApenasNumeros = cep.replace(/[a-zA-Z\s]/g, "");
  cepApenasNumeros = cepApenasNumeros.replace(/\D/g, "");
  return cepApenasNumeros
}