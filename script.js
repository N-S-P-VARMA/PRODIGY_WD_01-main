// JavaScript to change navbar style on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// JavaScript for hamburger menu functionality
document.querySelector('.hamb').addEventListener('click', function() {
    this.classList.toggle('click');
    document.querySelector('.menu-overlay').classList.toggle('active');
});
