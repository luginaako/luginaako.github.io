luginaako// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth scroll for internal links
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Toggle mobile menu
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Form submission handler (optional)
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            
            // Example: log form data to the console
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // You can add form validation, AJAX request, etc. here
            alert("Form submitted!");
        });
    }
});
