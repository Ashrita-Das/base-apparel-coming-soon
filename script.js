const form = document.querySelector('.subscribe');
const email = document.getElementById("email");
const errorIcon = document.querySelector('.error--icon');
const validationMessage = document.querySelector('.validation--message');

form.addEventListener("submit", e => {
e.preventDefault();
const emailValue = email.value;

if(!validateEmail(emailValue)) {
    validationMessage.textContent = "Please enter a valid email";
    validationMessage.style.color = 'hsl(0, 93%, 68%)';
    errorIcon.classList.add("visible");
    form.classList.add("error");
}
else {
    validationMessage.textContent = "Thank you!";
    validationMessage.style.color = 'hsl(0, 6%, 24%)';
    errorIcon.classList.remove("visible");
    form.classList.remove("error");
    email.value = "";
  }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
