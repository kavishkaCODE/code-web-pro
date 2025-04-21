  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('mainMenu');
  
  menuToggle.addEventListener('click', function() {
    mainMenu.classList.toggle('show');
  });
  
  // Testimonial Slider
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }
  
  // Click events for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = this.getAttribute('data-slide');
      showSlide(parseInt(slideIndex));
    });
  });
  
  // Auto-rotate testimonials
  setInterval(function() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
  
  // Scroll animation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking a link
      mainMenu.classList.remove('show');
    });
  });
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real site, you'd handle form submission to server here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });