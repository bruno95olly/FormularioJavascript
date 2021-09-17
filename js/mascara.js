function mascaraTelefone(telefone){
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ')'; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(telefone.value.length == 8)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}
function mascaraCelular(celular){
    if(celular.value.length == 0)
        celular.value = '(' + celular.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(celular.value.length == 3)
        celular.value = celular.value + ')'; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(celular.value.length == 9)
        celular.value = celular.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}
function mascaraCep(cep){
    if(cep.value.length == 5)
        cep.value = cep.value + '-'; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
}
