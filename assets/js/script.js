// Smooth scroll to form section
function scrollToForm() {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Add scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe form section for animation
    const formSection = document.querySelector('.form-section');
    if (formSection) {
        observer.observe(formSection);
    }

    // Add floating animation to scroll button
    const scrollButton = document.querySelector('.scroll-button');
    if (scrollButton) {
        scrollButton.addEventListener('mouseenter', () => {
            scrollButton.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        scrollButton.addEventListener('mouseleave', () => {
            scrollButton.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Handle custom wedding form submission
    const weddingForm = document.getElementById('weddingForm');
    const successMessage = document.getElementById('successMessage');
    
    if (weddingForm) {
        weddingForm.addEventListener('submit', function(e) {
            // Show loading state
            const btnText = document.querySelector('.btn-text');
            const btnLoading = document.querySelector('.btn-loading');
            
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            
            // Hide form and show success message after a delay
            setTimeout(() => {
                weddingForm.style.display = 'none';
                successMessage.style.display = 'block';
            }, 1500);
        });
    }

    // Add parallax effect to hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    });

    // Preload images for better performance
    const preloadImages = [
        'assets/images/hero.jpeg',
        'assets/images/form.jpg'
    ];

    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {}, {passive: true});
