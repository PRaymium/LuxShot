var login_button = document.getElementsByClassName('login-button');
var global_container = document.getElementsByClassName('global-container');
var reg_toggle = document.getElementsByClassName('reg-toggle');
var login_toggle = document.getElementsByClassName('login-toggle');
var login_form = document.getElementsByClassName('login-form');
var signup_form = document.getElementsByClassName('signup-form');
var close_form_button = document.getElementsByClassName('close-form-button');

login_button[0].onclick = function() {
    login_form[0].classList.add("visible");
    global_container[0].classList.toggle("active");
}

reg_toggle[0].onclick = function() {
	signup_form[0].classList.add("visible");
	login_form[0].classList.remove("visible")
}

login_toggle[0].onclick = function() {
	signup_form[0].classList.remove("visible");
	login_form[0].classList.add("visible")
}

close_form_button[0].onclick = function() {
	login_form[0].classList.remove("visible");
	global_container[0].classList.remove("active");
}

close_form_button[1].onclick = function() {
	signup_form[0].classList.remove("visible");
	global_container[0].classList.remove("active");
}