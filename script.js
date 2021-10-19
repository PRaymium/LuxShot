let login_button = document.getElementsByClassName('login-button');
let authorization_form = document.getElementsByClassName('authorization-form');

login_button.onclick = function() {
    authorization_form[0].classList.toggle('active');
}