'use strict';

function preencherFormulario(endereco){
  document.getElementById('rua').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
}

const pesquisarCep = async() => {
  const cep = document.getElementById('cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  //fetch(url).then(response => response.json).then(console.log)
  const dados = await fetch(url);
  const endereco = await dados.json();

  preencherFormulario(endereco);
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
