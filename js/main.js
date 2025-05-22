// Main JavaScript for Pranav Banga's Portfolio
// Hybrid Version - Based on V3 with V4 features

// Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });
    
    // Cursor effects on hover
    const links = document.querySelectorAll('a, button, .project-card, .gallery-item');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursor.style.transform = 'scale(1.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursor.style.transform = 'scale(1)';
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseout', function(e) {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', function() {
        cursor.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
});

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        document.body.classList.toggle('nav-open');
        
        // Toggle animation for hamburger icon
        this.classList.toggle('active');
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile nav when a link is clicked
            document.body.classList.remove('nav-open');
            navToggle.classList.remove('active');
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Timeline items animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleClass: "visible",
                once: true
            }
        });
    });
    
    // Skill progress bars animation
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        
        gsap.to(bar, {
            width: percentage + '%',
            scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                once: true
            },
            duration: 1.5,
            ease: "power2.out"
        });
    });
    
    // Section headers animation
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        gsap.from(header, {
            y: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                once: true
            },
            duration: 1,
            ease: "power2.out"
        });
    });
    
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true
            },
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out"
        });
    });
});

// Projects Filter
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Gallery Filter and Modal
document.addEventListener('DOMContentLoaded', function() {
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.gallery-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalCaption = document.querySelector('.modal-caption');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    
    let currentIndex = 0;
    let filteredItems = [...galleryItems];
    
    // Gallery filter functionality
    galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            galleryFilterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Update filtered items array
            filteredItems = [...galleryItems].filter(item => {
                const category = item.getAttribute('data-category');
                return filter === 'all' || category === filter;
            });
        });
    });
    
    // Open modal when clicking on gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const imgAlt = this.querySelector('img').getAttribute('alt');
            
            modalImage.setAttribute('src', imgSrc);
            modalImage.setAttribute('alt', imgAlt);
            modalCaption.textContent = imgAlt;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Set current index
            currentIndex = filteredItems.indexOf(this);
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside of content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Previous image
    modalPrev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        updateModalImage();
    });
    
    // Next image
    modalNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % filteredItems.length;
        updateModalImage();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
            updateModalImage();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % filteredItems.length;
            updateModalImage();
        } else if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Update modal image
    function updateModalImage() {
        const item = filteredItems[currentIndex];
        const imgSrc = item.querySelector('img').getAttribute('src');
        const imgAlt = item.querySelector('img').getAttribute('alt');
        
        modalImage.style.opacity = '0';
        
        setTimeout(() => {
            modalImage.setAttribute('src', imgSrc);
            modalImage.setAttribute('alt', imgAlt);
            modalCaption.textContent = imgAlt;
            modalImage.style.opacity = '1';
        }, 300);
    }
});

// Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                alert('Message sent successfully! I will get back to you soon.');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
