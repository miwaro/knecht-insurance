
window.addEventListener('load', (event) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.querySelector(".hide-until-load").classList.remove("hide-until-load");
  });
document.getElementById("hamburger-menu").addEventListener("click", toggleNavLinks);

function toggleNavLinks() {
    console.log('toggle');
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