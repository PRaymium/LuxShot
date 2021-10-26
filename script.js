var login_button = document.getElementsByClassName('login-button');
var authorization_form = document.getElementsByClassName('authorization-form');
var global_container = document.getElementsByClassName('global-container');
var reg_toggle = document.getElementsByClassName('reg-toggle');
var login_toggle = document.getElementsByClassName('login-toggle');
var login_form = document.getElementsByClassName('login-form');
var signup_form = document.getElementsByClassName('signup-form');
var close_form_button = document.getElementsByClassName('close-form-button');

login_button[0].onclick = function() {
    authorization_form[0].classList.toggle("active");
    global_container[0].classList.toggle("active");
}

reg_toggle[0].onclick = function() {
	signup_form[0].classList.toggle("visible");
	login_form[0].classList.toggle("non-visible")
}

login_toggle[0].onclick = function() {
	signup_form[0].classList.toggle("visible");
	login_form[0].classList.toggle("non-visible")
}

close_form_button[0].onclick = function() {
	authorization_form[0].classList.toggle("active");
	global_container[0].classList.toggle("active");
}