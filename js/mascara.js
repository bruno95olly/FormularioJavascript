function mascaraTelefone(telefone){
  //retira caracteres indesejados
    telefone.value = telefone.value.replace(/[^\d]/g, "")
  //realiza a formatação
    telefone.value = telefone.value.replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3")


/*-----------------OUTRA FORMA DE FAZER A MASCARA-------------------
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ')'; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(telefone.value.length == 8)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
-------------------------------------------------------------------*/
}
function mascaraCelular(celular){
  //retira caracteres indesejados
    celular.value = celular.value.replace(/[^\d]/g, "")
  //realiza a formatação
    celular.value = celular.value.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3")


/*-----------------OUTRA FORMA DE FAZER A MASCARA-------------------

if(celular.value.length == 0)
    celular.value = '(' + celular.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
if(celular.value.length == 3)
    celular.value = celular.value + ')'; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

if(celular.value.length == 9)
    celular.value = celular.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

-------------------------------------------------------------------*/




}
function mascaraCep(cep){
//retira caracteres indesejados
  cep.value = cep.value.replace(/[^\d]/g, "")
//realiza a formatação
  cep.value = cep.value.replace(/(\d{5})(\d{3})/, "$1-$2")

/*---------OUTRA FORMA DE FAZER A MASCARA----------------
  //quando o campo tiver 5 caracteres, o script irá inserir um traço - , fechando assim o código de área.
    if(cep.value.length == 5)
        cep.value = cep.value + '-';
-------------------------------------------------------*/

}
function mascaraCpf(cpf){
  cpf.value = cpf.value.replace(/[^\d]/g, "")
  cpf.value = cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}
