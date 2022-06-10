const burgerX = document.querySelector('.icon-menu');
const comboMenu = document.querySelector('.no-menu');
const contactForm = document.querySelector('form');
const email = document.getElementById('email');

burgerX.addEventListener('click', () => {
    if (burgerX.classList.contains('x-icon') || comboMenu.classList.contains('dropdown-menu')) {
        burgerX.classList.remove('x-icon');
        comboMenu.classList.remove('dropdown-menu');
    } else {
        burgerX.classList.add('x-icon');
        comboMenu.classList.add('dropdown-menu');
    }
});

// comment this function if use third-party send email service on form action
function validCheck() {
    let email_text = email.value;
    let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email_regex.test(email_text)) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // console.log("Submitted");
            confirm("Thank you for the feedback");
        });
    } else {
        alert("Please input name or a valid existing email!");
    }
}