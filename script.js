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

async function authorizationDataSend(e){
	e.preventDefault();
	if (e.target.id === "signupForm")
	{
		if (!(signupForm-passwordRepeat-input.value == signupForm-password-input.value))
        {
            alert("Пароли не совпадают");
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