'use strict';

function getDadosPeloCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    }
    )
    .then(data => {
      if (data.erro) {
        return data
      }
      return data;
    });
}

export { getDadosPeloCep }; 