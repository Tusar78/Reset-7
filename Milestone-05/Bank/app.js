// All of Refferal
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');
const submitBtn = document.getElementById('submit-btn');

const submitFunc = (e) => {
    if(emailField.value === 'tusar@gmail.com' && passwordField.value === 'tusar') {
        location.href = 'bank.html'
    } else {
        alert("Please enter valid email")
    }
}

submitBtn.addEventListener('click', submitFunc);