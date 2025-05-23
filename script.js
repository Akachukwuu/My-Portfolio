        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementById('navbar');
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('open');
        });
        // Close nav on link click (mobile)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                if(window.innerWidth <= 800) {
                    hamburger.classList.remove('active');
                    navbar.classList.remove('open');
                }
            });
        });

        // Scroll Animation
        function revealOnScroll() {
            document.querySelectorAll('.animate').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 80) {
                    el.classList.add('visible');
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('DOMContentLoaded', revealOnScroll);

        // Smooth scroll for nav links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({behavior: 'smooth'});
                }
            });
        });

        // Contact form fake submit
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            const msg = document.getElementById('formMessage');
            msg.textContent = "Thank you for reaching out! I'll get back to you soon.";
            msg.style.display = 'block';
            this.reset();
            setTimeout(() => { msg.style.display = 'none'; }, 4000);
        });