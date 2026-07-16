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

  fetch('index.json')

  .then(response => response.json())

  .then(data => {
    const Projects =document.querySelector('.card-grid');
     
    Projects.innerHTML = data.map(item => `
        

        <article class="card">
                    <div>
                        <div class="card-tag-row">
                            <span class="card-tag">${item.cardTag}</span>
                            <span class="material-symbols-outlined card-icon">${item.matSymbol}</span>
                        </div>
                        <h3 class="card-title">${item.cardTitle}</h3>
                        <p class="card-desc">${item.cardDesc}</p>
                        <div class="card-author">
                            <div class="avatar">${item.avatar}</div>
                            <span class="author-name">${item.authorName}</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a class="btn btn-primary" href="#">VIEW DETAILS</a>
                        <a class="btn btn-outline" href="login.html">CONTACT INVESTOR</a>
                    </div>
                </article>

          
    `).join('');

  })
  .catch(error =>{
    console.error('error fetching data',error);
  });
