// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById('toggle-mode-btn');
toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleModeBtn.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});

// Counter Game 
let counter = 0;
const counterValue = document.getElementById('counter-value');
document.getElementById('increment-btn').addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});
document.getElementById('decrement-btn').addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});

//  Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// Form Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Helper validation functions
function validateName(name) {
    return name.trim().length >= 2;
}
function validateEmail(email) {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(password) {
    // At least 6 chars, one number, one letter
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

// Real-time validation
nameInput.addEventListener('input', () => {
    nameError.textContent = validateName(nameInput.value) ? '' : 'Name must be at least 2 characters.';
});
emailInput.addEventListener('input', () => {
    emailError.textContent = validateEmail(emailInput.value) ? '' : 'Enter a valid email address.';
});
passwordInput.addEventListener('input', () => {
    passwordError.textContent = validatePassword(passwordInput.value) ? '' : 'Password must be 6+ chars, include a number.';
});

// On form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 2 characters.';
        valid = false;
    }
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    }
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be 6+ chars, include a number.';
        valid = false;
    }

    if (valid) {
        formSuccess.textContent = 'Form submitted successfully!';
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        form.reset();
        setTimeout(() => { formSuccess.textContent = ''; }, 3000);
    } else {
        formSuccess.textContent = '';
    }
});