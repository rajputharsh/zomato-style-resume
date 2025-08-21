// Zomato-Style Resume JavaScript
// This is a placeholder for future JavaScript functionality

console.log('Zomato-Style Resume loaded!');

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initialize the resume functionality
    initializeResume();
});

// Initialize Resume Function
function initializeResume() {
    // Add smooth scrolling to navigation links
    addSmoothScrolling();
    
    // Add interactive elements
    addInteractiveElements();
    
    // Log initialization
    console.log('Resume initialized successfully!');
}

// Add smooth scrolling functionality
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add interactive elements
function addInteractiveElements() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            console.log('Button hovered:', this.textContent);
        });
    });
    
    // Add click tracking
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn')) {
            console.log('Button clicked:', e.target.textContent);
        }
    });
}

// Utility function to format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeResume,
        addSmoothScrolling,
        addInteractiveElements,
        formatDate
    };
}
