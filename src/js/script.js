const hamburgerMenu = document.getElementById("hamburger-menu");
const quoteFormLink = document.getElementById("quote-form-link");
if (hamburgerMenu) hamburgerMenu.addEventListener("click", toggleNavLinks);
if (quoteFormLink) quoteFormLink.addEventListener("click", navigateToQuoteForm);

function toggleNavLinks() {
    var links = document.getElementById("mobile-nav-links");
    var hamburger = document.getElementById("hamburger-menu");
    var mobileNavbar = document.querySelector(".mobile-nav-bar");
    var isHidden = links.classList.contains("hide"); 

    if (isHidden) {
        links.classList.remove("hide");
        hamburger.classList.add("active");
        mobileNavbar.classList.add("open");
    } else {
        links.classList.add("hide");
        hamburger.classList.remove("active");
        mobileNavbar.classList.remove("open");
    }
}

function navigateToQuoteForm() {
    toggleNavLinks();
    var elmnt = document.getElementById("sidebar");
    elmnt.scrollIntoView();
}

