const email = document.getElementById('email');
const password = document.getElementById('password');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const btn = document.getElementById('btn');
let numbers = /[0-9]/g;
let letters = /[a-z]/g;
let lettersUp = /[A-Z]/g;
let forEmail = /[@]/g;
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === "") {
        text.innerText = "Enter The Correct Email Format.";
        email.classList.add('wrong');
        email.classList.remove('good');
    } 
    else if (email.value !== "" && email.value.match(forEmail)) {
        text.innerText = "";
        email.classList.remove('wrong');
        email.classList.add('good');
    } else {
        text.innerText = "You Forgot '@' For Your Email Address.";
        email.classList.add('wrong');
        email.classList.remove('good');
    }
    if (password.value !== "" && password.value.match(numbers) && password.value.match(letters) && password.value.match(lettersUp) && password.value.length >= 8) {
        text2.innerText = ''
        password.classList.add('good');
        password.classList.remove('wrong');
    } else {
        text2.innerText = `Your Password Must Contain A Number, An Uppecace,
        Lowercase Letter And At Least 8 Characters!`
        password.classList.remove('good');
        password.classList.add('wrong');
    }
    if (email.value !== "" && email.value.match(forEmail) && password.value !== "" && password.value.match(numbers) && password.value.match(letters) && password.value.match(lettersUp) && password.value.length >= 8) {
        window.location.href = '../index.html'
    }
});