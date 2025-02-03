function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Function to reveal elements on scroll
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.box, .info-box, .product, .about-details, .contact-info-section, .image-content');
    
    const options = {
        root: null, // use the viewport
        threshold: 0.5 // When 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize the scroll reveal function
revealOnScroll();






