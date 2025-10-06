/*document.addEventListener("DOMContentLoaded", function () { // Redirect from Home Page (index.html) to Courses Page
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            window.location.href = "/courses";
        });
    }
      
    const continueBtn = document.getElementById("continueBtn"); //Redirect from Courses Page (courses.html) to Next Page
    if (continueBtn) {
        continueBtn.addEventListener("click", function () {
            window.location.href = "/course-detail";
       });
    }
});

/*document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            console.log("Explore button clicked");
            window.location.href = "/courses";
        });
    }
});*/


document.addEventListener("DOMContentLoaded", function () {
  /*const nextBtn = document.getElementById("nextPage");
  const prevBtn = document.getElementById("prevPage");*/
   
  const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            window.location.href = "/courses";
        });
    }

    const continueBtn = document.getElementById("continueBtn"); //Redirect from Courses Page (courses.html) to Next Page
    if (continueBtn) {
        continueBtn.addEventListener("click", function () {
            window.location.href = "/course-detail";
       });
    }
});

// Main JavaScript file for LearningHub
document.addEventListener("DOMContentLoaded", function () {
    
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Bootstrap popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Button click animations
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Form validation enhancement
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Loading states for buttons
    document.querySelectorAll('.btn[data-loading]').forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.classList.add('btn-loading');
            this.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Loading...';
            this.disabled = true;
            
            // Simulate loading (replace with actual async operation)
            setTimeout(() => {
                this.classList.remove('btn-loading');
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Social media icons hover effect
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Course video links enhancement
    document.querySelectorAll('a[href*="youtube.com"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Add analytics tracking here if needed
            console.log('Video link clicked:', this.href);
        });
    });

    // Mobile menu enhancement
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollToTopBtn.className = 'btn btn-primary position-fixed';
    scrollToTopBtn.style.cssText = 'bottom: 20px; right: 20px; z-index: 1000; border-radius: 50%; width: 50px; height: 50px; display: none;';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .navbar-scrolled {
            background-color: rgba(0, 123, 255, 0.95) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);

    // Console welcome message
    console.log('%c🚀 Welcome to LearningHub!', 'color: #007bff; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with Bootstrap 5 and modern web technologies', 'color: #6c757d; font-size: 14px;');
});

// Export functions for potential module use
window.LearningHub = {
    scrollToTop: function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },
    
    showNotification: function(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
};
