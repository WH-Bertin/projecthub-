// Get navigation links
const navLinks = document.querySelectorAll('.nav-link');
// Get dummy links that point to '#'
const demoLinks = document.querySelectorAll('a[href="#"]');

// Activate the clicked nav link
function setActiveNavLink(link) {
  // Remove active class from all nav links
  navLinks.forEach(item => item.classList.remove('nav-link-active'));
  // Add active class to the clicked link
  link.classList.add('nav-link-active');
}

// Add click behavior to each nav link
navLinks.forEach(link => {
  // Listen for nav click
  link.addEventListener('click', event => {
    // Use the clicked element
    const target = event.currentTarget;
    // Activate it visually
    setActiveNavLink(target);
  });
});

// If any demo links exist
if (demoLinks.length) {
  // Loop all dummy links
  demoLinks.forEach(link => {
    // Disable their default behavior
    link.addEventListener('click', event => {
      event.preventDefault();
      // Show a demo notice
      alert('This demo page is static. More details will be added later.');
    });
  });
}
