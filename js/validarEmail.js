function emailIncorreto(){
  const email = document.getElementById('email').value
  const emailConfirmacao = document.getElementById('emailC').value
  const error = document.getElementById('error-email');

  if (emailConfirmacao !== email) {
    error.innerHTML = "email incorreto."
  }
  else{
    error.innerHTML = ""

  }
}
document.getElementById('email').addEventListener('focusout', emailIncorreto);
document.getElementById('emailC').addEventListener('focusout', emailIncorreto);
