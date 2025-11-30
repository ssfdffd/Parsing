document.addEventListener('DOMContentLoaded', () => {
    // Select all accordion header buttons
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Get the parent item and the content below it
            const item = header.parentElement;
            const content = header.nextElementSibling;
            
            // Toggle the 'active' class on the header and 'show' on the content
            header.classList.toggle('active');
            content.classList.toggle('show');

            // --- Optional: Close other open items when one is clicked ---
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('show');
                }
            });
            // -----------------------------------------------------------
        });
    });
});