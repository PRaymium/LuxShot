var login_button = document.getElementsByClassName('login-button');
var authorization_form = document.getElementsByClassName('authorization-form');
var global_container = document.getElementsByClassName('global-container');

login_button[0].onclick = function() {
    authorization_form[0].classList.toggle("active");
    global_container[0].classList.toggle("active");
}