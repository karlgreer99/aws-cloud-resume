document.addEventListener('DOMContentLoaded', () => {
    
    // Select all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        // Add click event listener to each item
        item.addEventListener('click', () => {
            
            // Toggle the 'active' class on the clicked item
            // This triggers the CSS transition for .job-details
            item.classList.toggle('active');
            
            // Optional: Close other items when one is opened (Accordion style)
            // Uncomment the lines below if you want only one open at a time
            /*
            timelineItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });
});
