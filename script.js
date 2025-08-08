document.addEventListener('DOMContentLoaded', function() {
    const layoutContainer = document.getElementById('layout-container');
    const footerContainer = document.getElementById('footer-container');

    const navigationHTML = `
        <header>
            <a href="index.html" class="logo">Emily Smith</a>
            <nav>
                <a href="index.html">Home</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer>
            <p>&copy; 2024 Emily Smith. All rights reserved.</p>
        </footer>
    `;

    if (layoutContainer) {
        layoutContainer.innerHTML = navigationHTML;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});