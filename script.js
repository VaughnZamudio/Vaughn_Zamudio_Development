document.addEventListener("DOMContentLoaded", function() {
    
    // Interaction: Contact Form Validation and Alert
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from actually refreshing the page
            
            // Basic validation
            const name = document.getElementById('name').value;
            
            if(name.length > 0) {
                alert(`Thanks, ${name}! Your message has been sent to PixelForge.`);
                contactForm.reset(); // Clear the form
            } else {
                alert("Please enter your name.");
            }
        });
    }
});
