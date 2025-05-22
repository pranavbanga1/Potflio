// JavaScript for 3D Model Toggle and Additive Manufacturing Section

document.addEventListener('DOMContentLoaded', function() {
    // Model Selector Functionality
    const modelOptions = document.querySelectorAll('.model-option');
    const modelViewer = document.getElementById('model-viewer');
    
    modelOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            modelOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Get model ID
            const modelId = this.getAttribute('data-model');
            
            // Update placeholder text based on selected model
            const placeholder = modelViewer.querySelector('.model-placeholder p');
            
            switch(modelId) {
                case 'model1':
                    placeholder.textContent = 'Mechanical Part - Upload a SolidWorks part file (.SLDPRT) or STL file to view in 3D';
                    break;
                case 'model2':
                    placeholder.textContent = 'Organic Design - Upload a SolidWorks part file (.SLDPRT) or STL file to view in 3D';
                    break;
                case 'model3':
                    placeholder.textContent = 'Assembly - Upload a SolidWorks assembly file (.SLDASM) or STL file to view in 3D';
                    break;
            }
        });
    });
    
    // Model Controls Functionality (Simulated)
    const rotateLeft = document.getElementById('rotate-left');
    const rotateRight = document.getElementById('rotate-right');
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    
    rotateLeft.addEventListener('click', function() {
        // Simulate rotation effect
        modelViewer.classList.add('rotate-left-animation');
        setTimeout(() => {
            modelViewer.classList.remove('rotate-left-animation');
        }, 500);
    });
    
    rotateRight.addEventListener('click', function() {
        // Simulate rotation effect
        modelViewer.classList.add('rotate-right-animation');
        setTimeout(() => {
            modelViewer.classList.remove('rotate-right-animation');
        }, 500);
    });
    
    zoomIn.addEventListener('click', function() {
        // Simulate zoom effect
        modelViewer.classList.add('zoom-in-animation');
        setTimeout(() => {
            modelViewer.classList.remove('zoom-in-animation');
        }, 500);
    });
    
    zoomOut.addEventListener('click', function() {
        // Simulate zoom effect
        modelViewer.classList.add('zoom-out-animation');
        setTimeout(() => {
            modelViewer.classList.remove('zoom-out-animation');
        }, 500);
    });
    
    // Upload Button Functionality
    const uploadBtn = document.querySelector('.model-upload-btn');
    
    uploadBtn.addEventListener('click', function() {
        alert('This is a placeholder for the 3D model upload functionality. In a production environment, this would open a file dialog to select a SolidWorks part file (.SLDPRT), assembly file (.SLDASM), or STL file.');
    });
    
    // Gallery Functionality
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');
    const zoomGallery = document.getElementById('zoom-gallery');
    const zoomOutGallery = document.getElementById('zoom-out-gallery');
    
    let currentSlide = 0;
    
    // Function to show slide
    function showSlide(index) {
        // Hide all slides
        gallerySlides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        gallerySlides[index].classList.add('active');
    }
    
    // Previous slide
    prevSlide.addEventListener('click', function() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = gallerySlides.length - 1;
        }
        showSlide(currentSlide);
    });
    
    // Next slide
    nextSlide.addEventListener('click', function() {
        currentSlide++;
        if (currentSlide >= gallerySlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });
    
    // Zoom in
    zoomGallery.addEventListener('click', function() {
        const activeSlide = document.querySelector('.gallery-slide.active');
        activeSlide.classList.add('zoomed');
    });
    
    // Zoom out
    zoomOutGallery.addEventListener('click', function() {
        const activeSlide = document.querySelector('.gallery-slide.active');
        activeSlide.classList.remove('zoomed');
    });
    
    // Auto-advance gallery
    setInterval(function() {
        currentSlide++;
        if (currentSlide >= gallerySlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }, 5000);
});
