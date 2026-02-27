document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active nav link
                const navLinks = document.querySelectorAll('.main-nav ul li a');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add dark card backgrounds
    const cards = document.querySelectorAll('.mission-card, .tech-card, .project-card');
    cards.forEach(card => {
        card.style.backgroundColor = '#1a1a2e';
        card.style.boxShadow = '0 15px 30px rgba(74, 144, 226, 0.3)';
        card.style.transition = 'background-color 0.3s ease';
    });

    // Add hover effects for cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#16213e';
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#1a1a2e';
        });
    });

    // Animate cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.animated-card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animation
    document.addEventListener('DOMContentLoaded', animateOnScroll);

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add animation classes to cards
    cards.forEach(card => {
        card.classList.add('animated-card');
    });
});