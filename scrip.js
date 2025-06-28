document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.Register-link');
    
    function showLoginForm() {
        wrapper.classList.remove('active');
    }
    
    function showRegisterForm() {
        wrapper.classList.add('active');
    }

    registerLink.addEventListener('click', showRegisterForm);
    loginLink.addEventListener('click', showLoginForm);
});