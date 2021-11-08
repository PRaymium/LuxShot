let loginButton = document.getElementById('header-login-button');
let formContainer = document.getElementById('form-container');
let loginFormToSignupToggle = document.getElementById('login-form-button-to-signup');
let signupFormToLoginToggle = document.getElementById('signup-form-button-to-login');
let closeFormButton = document.getElementsByClassName('close-form-button');

let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');

loginButton.onclick = function() {
    loginForm.classList.add("visible");
    formContainer.classList.add("blurred");
}

loginFormToSignupToggle.onclick = function() {
	signupForm.classList.add("visible");
	loginForm.classList.remove("visible")
}

signupFormToLoginToggle.onclick = function() {
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




async function authorizationDataSend(e){
	e.preventDefault();
	console.log(e);
	if (e.target.id === "login-form")
	{
		//validation
	}
	else if (e.target.id === "signup-form")
	{
		
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