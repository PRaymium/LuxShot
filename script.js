let loginButton = document.getElementById('header-login-button');
let formContainer = document.getElementById('form-container');
let loginFormToSignupFormToggle = document.getElementById('login-form-button-to-signup');
let signupFormToLoginFormToggle = document.getElementById('signup-form-button-to-login');
let closeFormButton = document.getElementsByClassName('close-form-button');

let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');

loginButton.onclick = function() {
    loginForm.classList.add("visible");
    formContainer.classList.add("blurred");
}

loginFormToSignupFormToggle.onclick = function() {
	signupForm.classList.add("visible");
	loginForm.classList.remove("visible")
}

signupFormToLoginFormToggle.onclick = function() {
	signupForm.classList.remove("visible");
	loginForm.classList.add("visible")
}

closeFormButton[0].onclick = function() {
	loginForm.classList.remove("visible");
	formContainer.classList.remove("blurred");
}

closeFormButton[1].onclick = function() {
	signupForm.classList.remove("visible");
	formContainer.classList.remove("blurred");
}



function emailCheck(input){
	//return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	input.type = "email";
	return input.checkValidity();
}

function passwordCheck(input){
	input.pattern = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$";
	return input.checkValidity();
}

function nameCheck(input){
	input.pattern = "[А-Яа-я\\s-]*";
	return input.checkValidity();
}

function phoneCheck(input){
	input.pattern = "8\\d{3}\\d{3}\\d{2}\\d{2}";
	return input.checkValidity();
}

function signupFormValidation(){
	var signupFormNameInput = document.getElementById("signupForm-name-input");
	var signupFormEmailInput = document.getElementById("signupForm-email-input");
	var signupFormPhoneNumberInput = document.getElementById("signupForm-phone-input")
	var signupFormPasswordInput = document.getElementById("signupForm-password-input");
	var signupFormPasswordRepeatInput = document.getElementById("signupForm-passwordRepeat-input");
	var signupFormCheckboxInput = document.getElementById("signupForm-checkbox-input");

	if (!nameCheck(signupFormNameInput)){
		console.log("signupFormNameInput incorrect");
		return false;
	}
	if (!emailCheck(signupFormEmailInput)){
		console.log("signupFormEmailInput incorrect");
		return false;
	}
	if (!passwordCheck(signupFormPasswordInput)){
		console.log("signupFormPasswordInput incorrect");
		return false;
	}
	if (!passwordCheck(signupFormPasswordRepeatInput)){
		console.log("signupFormPasswordRepeatInput incorrect");
		return false;
	}
	if (!phoneCheck(signupFormPhoneNumberInput)){
		console.log("signupFormPhoneNumberInput incorrect");
		return false;
	}
	if (!signupFormCheckboxInput.checked){
		return false;
	}
	return true;
}

async function authorizationDataSend(e){
	e.preventDefault();
	if (e.target.id === "signup-form")
	{
		if (!signupFormValidation())
		{
			return;
		}
	}
		
	let formData = new FormData(this);

	let response = await fetch('https://httpbin.org/post', {
		method: 'POST',
		body: formData
	});

	if (response.ok){
		let result = await response.json();
		console.log(result.form);
	}
	else {
		alert('Ошибка HTTP: ' + response.status);
	}
}

loginForm.addEventListener("submit", authorizationDataSend);
signupForm.addEventListener("submit", authorizationDataSend);