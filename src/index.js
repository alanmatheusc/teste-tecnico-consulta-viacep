'use strict';
import { ehComprimentoValido } from './validators/cepValidator.js'
import { aplicarMascaraCep } from './ui/masks/cepMask.js';
import { getDadosPeloCep } from './services/viaCepService.js';
import formatarCep from './regex/removerCaracteres.js';
import { mostrarToastSucesso, mostrarToastErroRequisicao } from './ui/toast/showToast.js';
import { renderizarCepForm, removerCepForm } from './ui/cepForm/renderizarCepForm.js';

let cep = document.getElementById('cepInput');
aplicarMascaraCep(cep)
let botaoBuscar = document.getElementById('submit_button').addEventListener('click', handleSubmit);

// Essa função vai lidar com o evento de submit do formulário e decidir o que fazer. Caso o comprimento for válido, podemos prosseguir com a busca do cep.
async function handleSubmit(e) {
  if (ehComprimentoValido(e)) {
    let cepInput = document.getElementById('cepInput').value;
    cepInput = formatarCep(cepInput);
    removerCepForm();

    const dadosLogradouro = await getDadosPeloCep(cepInput)
    validarRequisicao(dadosLogradouro);
  }
}
function validarRequisicao(dados) {
  if (dados.erro) {
    mostrarToastErroRequisicao()
    return;
  }
  exibirDados(dados)
  mostrarToastSucesso()
}

function exibirDados(dados) {
  renderizarCepForm(dados)
}