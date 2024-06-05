const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
    });
  });
  
  // Add active class to clicked navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  // Add hover effects for buttons
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('hover');
    });
    button.addEventListener('mouseleave', () => {
      button.classList.remove('hover');
    });
  });
  