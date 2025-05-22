/**
 * Project-specific JavaScript for Pranav Banga's Portfolio
 * Handles project page interactions and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize project gallery
    initProjectGallery();
    
    // Initialize project details animations
    initProjectAnimations();
});

// Custom cursor
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Add slight delay to outline for smooth effect
        setTimeout(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        }, 80);
    });
    
    // Add hover effect for links and buttons
    const hoverElements = document.querySelectorAll('a, button, .gallery-item');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(255, 48, 79, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

// Navigation
function initNavigation() {
    const nav = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');
    
    // Sticky navigation on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll for navigation links
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navToggle && navToggle.classList.contains('active')) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project gallery
function initProjectGallery() {
    const galleryItems = document.querySelectorAll('.project-gallery-item');
    const galleryModal = document.querySelector('.gallery-modal');
    
    if (!galleryItems.length || !galleryModal) return;
    
    const modalImage = galleryModal.querySelector('.modal-image');
    const modalCaption = galleryModal.querySelector('.modal-caption');
    const modalClose = galleryModal.querySelector('.modal-close');
    const modalPrev = galleryModal.querySelector('.modal-prev');
    const modalNext = galleryModal.querySelector('.modal-next');
    
    let currentIndex = 0;
    
    // Open modal
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').getAttribute('src');
            const caption = item.querySelector('.gallery-caption')?.textContent || '';
            
            modalImage.setAttribute('src', imgSrc);
            modalCaption.textContent = caption;
            currentIndex = index;
            
            galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', () => {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal on outside click
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Previous image
    modalPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalImage();
    });
    
    // Next image
    modalNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateModalImage();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!galleryModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            updateModalImage();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            updateModalImage();
        }
    });
    
    // Update modal image
    function updateModalImage() {
        const item = galleryItems[currentIndex];
        const imgSrc = item.querySelector('img').getAttribute('src');
        const caption = item.querySelector('.gallery-caption')?.textContent || '';
        
        modalImage.setAttribute('src', imgSrc);
        modalCaption.textContent = caption;
    }
}

// Project animations
function initProjectAnimations() {
    // Initialize GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Project header animations
        gsap.from('.project-header', {
            scrollTrigger: {
                trigger: '.project-header',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8
        });
        
        // Project details animation
        gsap.from('.project-details', {
            scrollTrigger: {
                trigger: '.project-details',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2
        });
        
        // Project gallery animation
        gsap.utils.toArray('.project-gallery-item').forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1
            });
        });
        
        // Project features animation
        gsap.utils.toArray('.project-feature').forEach((feature, index) => {
            gsap.from(feature, {
                scrollTrigger: {
                    trigger: feature,
                    start: 'top 85%'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1
            });
        });
    } else {
        // Fallback for when GSAP is not available
        const animateElements = document.querySelectorAll('.project-header, .project-details, .project-gallery-item, .project-feature');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {threshold: 0.1});
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Project video player
const videoPlayers = document.querySelectorAll('.project-video');
if (videoPlayers.length > 0) {
    videoPlayers.forEach(player => {
        const video = player.querySelector('video');
        const playButton = player.querySelector('.video-play');
        
        if (video && playButton) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playButton.classList.add('playing');
                } else {
                    video.pause();
                    playButton.classList.remove('playing');
                }
            });
            
            video.addEventListener('ended', () => {
                playButton.classList.remove('playing');
            });
        }
    });
}

// Project related items
const relatedProjects = document.querySelector('.related-projects');
if (relatedProjects) {
    const projectCards = relatedProjects.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            projectCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
}

// Back to projects button
const backButton = document.querySelector('.back-to-projects');
if (backButton) {
    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '../index.html#projects';
    });
}
