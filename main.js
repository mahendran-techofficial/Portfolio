var typed = new Typed(".role",{
    strings:["Software Engineer", "Web Developer", "Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// Dark Mode Toggle
const toggleSwitch = document.getElementById('moon-icon');

toggleSwitch.addEventListener('click', () => {
    // Toggle the dark mode on the HTML element
    document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    
    // Toggle the moon/sun icon class
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        toggleSwitch.classList.replace('bx-moon', 'bx-sun');
    } else {
        toggleSwitch.classList.replace('bx-sun', 'bx-moon');
    }
});

//Menu Icon click handling
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuicon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

//Highlighting the Menu which activated
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function () {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
        let headerEl = document.querySelector('header');
        headerEl.classList.toggle('sticky',window.scrollY > 100)
    });

    ScrollReveal({
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
    })
    ScrollReveal().reveal('.header-text,.about-img,.technical-bars, .contact-info, .work', {origin: 'left'});

    ScrollReveal().reveal('.pic,.experience, .tools-box, .contact-form', {origin: 'right'})

    ScrollReveal().reveal('.about-content, .skills-heading, .service-header, .contact-header , .skills-header, .project-header', {origin: 'top'})

    ScrollReveal().reveal('.services-list', {origin: 'bottom'})

});