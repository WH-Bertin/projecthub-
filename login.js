// This is the simple JS we bertin weeeeeeeeeeeeeeeeee
const loginForm = document.querySelector('.login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const demoLinks = document.querySelectorAll('a[href="#"]');

if (loginForm) {
  loginForm.addEventListener('submit', event => {
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      event.preventDefault();
      alert('Please enter both email and password to sign in.');
      return;
    }

    alert('Signing in...');
  });
}

if (demoLinks.length) {
  demoLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('This demo page does not have that link active yet.');
    });
  });
}
