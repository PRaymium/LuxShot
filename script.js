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


let loginForm = document.forms.loginForm;


loginForm.onsubmit = async function(e) {
	e.preventDefault();

	let formData = new FormData(this);

	let response = await fetch('https://httpbin.org/post', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		  },
		body: JSON.stringify(formData)
	});

	console.log(JSON.stringify(formData));

	if (response.ok){
		let result = await response.json();
		console.log(result);
	}
	else {
		alert('Ошибка HTTP: ' + response.status);
	}
}


// loginForm.onsubmit = function(e) {
// 	e.preventDefault();
// 	let formData = new FormData(this);


	

// 	for (let pair of formData.entries()) {
// 		console.log(pair[0] + ", " + pair[1]);
// 	}
// 	console.log(formData.get('email'));
// }

// loginForm.onsubmit = async function(e) {
// 	e.preventDefault();

// 	let formData = new FormData(this);

// 	let response = await fetch('https://httpbin.org/post', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json;charset=utf-8'
// 		  },
// 		body: JSON.stringify(formData)
// 	});

// 	if (response.ok){
// 		let result = await response.json();
// 		let res = result.form;
// 		console.log(result);
// 	}
// 	else {
// 		alert('Ошибка HTTP: ' + response.status);
// 	}
// }
