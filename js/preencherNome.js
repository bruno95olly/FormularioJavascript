function nomeCompleto(){
  const nome = document.getElementById('nome').value
  const sobrenome = document.getElementById('sobrenome').value
  const nomeInteiro = nome + " " + sobrenome
  if(nome !== "" && sobrenome !== ""){
    document.getElementById('nomeCompleto').value = nomeInteiro
    console.log(nome, sobrenome);
  }
}
function caracteresInvalidos(nome){
  nome.value = nome.value.replace(/[\[\]}.!'-@,><|://#"%$\\;&*()_+={]/g, "")
  nome.value = nome.value.replace(/[^\D]/g, "")

}
document.getElementById('nome').addEventListener('focusout', nomeCompleto);
document.getElementById('sobrenome').addEventListener('focusout', nomeCompleto);
