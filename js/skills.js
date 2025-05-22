// Skills Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const skillsTabs = document.querySelectorAll('.skills-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Add click event listeners to each tab button
    skillsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Get the tab data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            skillsTabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
            
            // Animate progress bars in the active tab
            const activeTabBars = document.querySelectorAll(`#${tabId}-content .skill-progress-bar`);
            activeTabBars.forEach(bar => {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = '0%';
                
                // Use setTimeout to ensure the animation runs after the tab is visible
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-out';
                    bar.style.width = percentage + '%';
                }, 50);
            });
        });
    });
    
    // Initialize progress bars for the default active tab
    const initialBars = document.querySelectorAll('.tab-content.active .skill-progress-bar');
    initialBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        
        // Delay initial animation for better visual effect
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = percentage + '%';
        }, 500);
    });
});
