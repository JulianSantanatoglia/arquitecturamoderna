// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarNav.classList.remove('active');
            navbarToggler.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbarToggler.contains(event.target) && !navbarNav.contains(event.target)) {
            navbarNav.classList.remove('active');
            navbarToggler.classList.remove('active');
        }
    });
}); 