const navLinks = document.querySelectorAll('.nav-link');
const demoLinks = document.querySelectorAll('a[href="#"]');

function setActiveNavLink(link) {
  navLinks.forEach(item => item.classList.remove('nav-link-active'));
  link.classList.add('nav-link-active');
}

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const target = event.currentTarget;
    setActiveNavLink(target);
  });
});

if (demoLinks.length) {
  demoLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('This demo page is static. More details will be added later.');
    });
  });
}
