document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Add scroll animations
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.hero-text p, .hero-text h1, .form-container, .stat-badge');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate__animated');
        element.classList.add('animate__fadeInUp');
      }
    });
  };
  
  // Call once on load and then on scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Form input animations
  const formInputs = document.querySelectorAll('.form-input');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('input-active');
    });
    
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.parentElement.classList.remove('input-active');
      }
    });
  });
  
  // Form submission
  const form = document.getElementById('registrationForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Basic validation
    if (!name || !email || !phone) {
      showToast('الرجاء ملء جميع الحقول المطلوبة', 'error');
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('الرجاء إدخال بريد إلكتروني صحيح', 'error');
      return;
    }
    
    // Normally you would send this data to a server
    // For now, just show success message
    showToast('تم التسجيل بنجاح! سنتواصل معك قريبًا', 'success');
    
    // Reset form with animation
    const formContainer = document.querySelector('.form-container');
    formContainer.classList.add('animate__animated', 'animate__headShake');
    
    setTimeout(() => {
      form.reset();
      formContainer.classList.remove('animate__animated', 'animate__headShake');
      document.querySelectorAll('.input-active').forEach(el => {
        el.classList.remove('input-active');
      });
    }, 500);
    
    // Show special thank you message
    showThankYouMessage();
  });
  
  // Toast notification system
  function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} animate__animated animate__fadeInUp`;
    toast.textContent = message;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Remove after delay
    setTimeout(() => {
      toast.classList.remove('animate__fadeInUp');
      toast.classList.add('animate__fadeOutDown');
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
  
  // Thank you message function
  function showThankYouMessage() {
    const thankYouDiv = document.createElement('div');
    thankYouDiv.className = 'thank-you-message animate__animated animate__zoomIn';
    thankYouDiv.innerHTML = `
      <div class="thank-you-content">
        <div class="thank-you-icon">✨</div>
        <h3 class="text-arabic">شكراً لانضمامك إلى عائلة قوابا!</h3>
        <p class="text-arabic">سنرسل لك العروض والمعلومات قريباً</p>
        <button class="close-button">إغلاق</button>
      </div>
    `;
    
    document.body.appendChild(thankYouDiv);
    
    // Style the thank you message
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .thank-you-message {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .thank-you-content {
        background: white;
        padding: 2rem;
        border-radius: var(--radius);
        text-align: center;
        max-width: 90%;
        width: 400px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        position: relative;
      }
      .thank-you-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        animation: sparkle 2s infinite;
      }
      .thank-you-content h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--accent-foreground);
      }
      .thank-you-content p {
        margin-bottom: 1.5rem;
        color: #666;
      }
      .close-button {
        background: linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%);
        color: white;
        border: none;
        padding: 0.5rem 1.5rem;
        border-radius: var(--radius);
        cursor: pointer;
        transition: all 0.3s;
      }
      .close-button:hover {
        opacity: 0.9;
        transform: translateY(-2px);
      }
      .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: white;
        border-radius: var(--radius);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        direction: rtl;
      }
      .toast-success {
        border-right: 4px solid #10B981;
      }
      .toast-error {
        border-right: 4px solid #EF4444;
      }
      .toast-info {
        border-right: 4px solid #3B82F6;
      }
    `;
    
    document.head.appendChild(styleElement);
    
    // Close button functionality
    thankYouDiv.querySelector('.close-button').addEventListener('click', function() {
      thankYouDiv.classList.remove('animate__zoomIn');
      thankYouDiv.classList.add('animate__zoomOut');
      setTimeout(() => thankYouDiv.remove(), 500);
    });
  }
  
  // Create floating decoration elements
  function createFloatingElements() {
    const decorContainer = document.querySelector('.container');
    const shapes = ['circle', 'cross', 'triangle', 'square'];
    const colors = ['var(--guapa)', 'var(--guapa-light)', 'var(--accent-foreground)', 'var(--muted-foreground)'];
    
    for (let i = 0; i < 12; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      
      // Randomize properties
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 20 + 5; // 5-25px
      const posX = Math.random() * 100; // 0-100%
      
      // Apply styles
      element.style.cssText = `
        position: absolute;
        top: -${size}px;
        left: ${posX}%;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        opacity: ${Math.random() * 0.5 + 0.1};
        animation: float-down ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        z-index: 5;
      `;
      
      // Set shape
      if (shape === 'circle') {
        element.style.borderRadius = '50%';
      } else if (shape === 'cross') {
        element.style.background = 'transparent';
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.position = 'relative';
        element.innerHTML = `
          <div style="
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${color};
            transform: translateY(-50%);
          "></div>
          <div style="
            position: absolute;
            top: 0;
            left: 50%;
            width: 2px;
            height: 100%;
            background-color: ${color};
            transform: translateX(-50%);
          "></div>
        `;
      } else if (shape === 'triangle') {
        element.style.background = 'transparent';
        element.style.borderLeft = `${size/2}px solid transparent`;
        element.style.borderRight = `${size/2}px solid transparent`;
        element.style.borderBottom = `${size}px solid ${color}`;
        element.style.width = '0';
        element.style.height = '0';
      }
      
      decorContainer.appendChild(element);
    }
    
    // Add the keyframes for the floating animation
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes float-down {
        from { transform: translateY(0) rotate(0); }
        to { transform: translateY(100vh) rotate(360deg); }
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  // Initialize floating elements
  createFloatingElements();
});





document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(this);

        fetch("submit.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("registrationForm").reset(); 
            } else {
                alert("حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى.");
            }
        })
        .catch(error => console.error("Error:", error));
    });
});
