const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-input")
const loginSubmit = document.querySelector(".login-submit")
const logoutSubmit = document.querySelector(".logout-submit")
const welcomeSpan = document.querySelector(".welcome-span")

const NAME = "name";
const HIDDEN = "hidden";
const getName = localStorage.getItem(NAME)

if (getName) {
    welcome(getName);
}

function logout(event) {
    event.preventDefault();
    welcomeSpan.innerText = "My Project name is"
    loginInput.value = ""
    localStorage.removeItem(NAME);
    loginInput.classList.remove(HIDDEN);
    loginSubmit.classList.remove(HIDDEN);
    logoutSubmit.classList.add(HIDDEN);
}

function welcome(value) {
    welcomeSpan.innerText = `${value}`
    loginInput.classList.add(HIDDEN);
    loginSubmit.classList.add(HIDDEN);
    logoutSubmit.classList.remove(HIDDEN);
    logoutSubmit.addEventListener("click", logout);
}

function Identifing(event) {
    event.preventDefault();
    const submitedNamed = event.target[0].value;
    localStorage.setItem(NAME, submitedNamed);
    welcome(submitedNamed);
}

loginForm.addEventListener("submit", Identifing);