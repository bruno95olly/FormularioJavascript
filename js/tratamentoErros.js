function tratamentoErros(){

//1 forma de fazer o tratamento de erros
// utilizando um array com varios objetos
// que recebe os valores das inputs
const dadosPessoa = [
  {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    cep: document.getElementById("cep").value,
    bairro: document.getElementById("bairro").value,
    rua: document.getElementById("rua").value,
    numero: document.getElementById("numero").value,
    cidade: document.getElementById("cidade").value,
    telefone: document.getElementById("telefone").value,
    celular: document.getElementById("celular").value,
    email: document.getElementById("email").value,
    confimarEmail: document.getElementById("emailC").value
  }
]

//esse foreach serve para achar o valor de cada objeto
//-----------------------------------------------
//OBS: queria conseguir achar uma forma de
//identificar se há uma caixa vazia no
//valor de todos os objetos, sem necessariamente
//escrever um por um, na estrutura do if
//-----------------------------------------------
const eVazio = (dado) => dado == ""
const dados = dadosPessoa.filter(eVazio)

  if (dados.length == 0){
    alert("Preencha todos os campos");
  }
  else if(dadosPessoa.cep.length != 9){
      alert("O Cep que voce digitou é invalido")
  }
  else if(dadosPessoa.celular.length != 14){
      alert("O celular que voce digitou é invalido")
  }
  else if(dadosPessoa.telefone.length != 13){
      alert("O telefone que voce digitou é invalido")
  }
  else if(dados.confimarEmail != dados.email){
    alert("Os emails não coincidem")
  }
  else{
    alert("Obrigado, seu formulario foi enviado");
  }



/*
//--------------------------------------------------
    2 forma de fazer o tratamento de erros,
    agora utilizando constantes para pegar
    os valores das inputs
//--------------------------------------------------
//---------------  CONSTANTES -------------------//

  const input_nome = document.getElementById("nome").value
  const input_sobrenome = document.getElementById("sobrenome").value
  const input_cep = document.getElementById("cep").value
  const input_bairro = document.getElementById("bairro").value
  const input_rua = document.getElementById("rua").value
  const input_numero = document.getElementById("numero").value
  const input_cidade = document.getElementById("cidade").value
  const input_telefone = document.getElementById("telefone").value
  const input_celular = document.getElementById("celular").value
  const input_email = document.getElementById("email").value
  const input_confimarEmail = document.getElementById("emailC").value

//-----------------------------------------------//

//-----------Estrutura de Decisão---------------//
  if(input_nome == "" || input_sobrenome == "" ||input_cep == "" ||input_bairro == "" ||input_rua == "" ||input_numero == "" ||input_cidade == "" ||input_telefone == "" ||input_celular == "" ||input_email == "" ||input_confimarEmail == "" ){
    alert("preencha todos os campos")
  }
  else{
    alert("formulario enviado")
  }
//-----------------------------------------------//
*/
}
