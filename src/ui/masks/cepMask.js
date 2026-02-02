'use strict';
import formatarCep from "../../regex/removerCaracteres.js";


// Estou capturando o valor do input para colocar uma mascara de CEP em tempo real, ou seja, enquanto o usuário digita. Até mesmo Letras ou caracteres especiais serão removidos, pois a função formatarCep valida se é número ou não.

function aplicarMascaraCep(cep) {
  cep.addEventListener('input', function (e) {
    let valor = e.target.value;
    valor = formatarCep(valor);
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = valor;
  })
}

export { aplicarMascaraCep }