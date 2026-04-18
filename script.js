// Toggle between landing page and category pages
function showCategory(categoryId) {
    document.getElementById('landingPage').classList.remove('active');
    
    // Hide all category pages
    const pages = document.querySelectorAll('.category-page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected category page
    const categoryPage = document.getElementById(categoryId);
    if (categoryPage) {
        categoryPage.classList.add('active');
    }
}

// Show landing page
function showLanding() {
    document.getElementById('landingPage').style.display = 'block';
    
    // Hide all category pages
    const pages = document.querySelectorAll('.category-page');
    pages.forEach(page => page.classList.remove('active'));
}

// Toggle accordion
function toggleAccordion(button) {
    // Toggle active class on button
    button.classList.toggle('active');
    
    // Get the panel that follows the button
    const panel = button.nextElementSibling;
    
    // Toggle panel display
    if (panel && panel.classList.contains('panel')) {
        panel.classList.toggle('active');
    }
}

// Close all accordions when switching categories
function closeAllAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.classList.remove('active');
        const panel = accordion.nextElementSibling;
        if (panel) {
            panel.classList.remove('active');
        }
    });
}