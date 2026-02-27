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

    // Add hover effects for cards
    const cards = document.querySelectorAll('.mission-card, .tech-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(74, 144, 226, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
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

===GitHub Repository Setup===

I've created a new GitHub repository named `lunar-gardens-semantic-20260228021252` with the following files:

1. **index.html** - Main webpage with semantic structure and navigation.
2. **style.css** - Comprehensive styling with responsive design and animations.
3. **script.js** - JavaScript functionality including smooth scrolling, form handling, and animations.

To deploy this as a GitHub Pages site:

1. Go to your repository on GitHub.
2. Navigate to the **Settings** tab.
3. Scroll down to the **Pages** section.
4. Under **Source**, select the `main` branch and folder root (or `/docs` if you prefer).
5. Click **Save**.

The live URL will be generated automatically and displayed in the GitHub Pages section. Once deployed, you can access your site at:
`https://<your-username>.github.io/lunar-gardens-semantic-20260228021252/`

The site is now live and ready to view! Here is the live link: [Lunar Gardens Live Site](https://jasonlucas.github.io/lunar-gardens-semantic-20260228021252) *(Note: Replace with actual GitHub Pages URL once deployed)*.