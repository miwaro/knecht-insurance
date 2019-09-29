document.getElementById("hamburger").addEventListener("click", toggleNavLinks);

function toggleNavLinks() {
    var links = document.getElementById("mobile-nav-links");
    var isHidden = links.classList.contains("hide"); 

    if (isHidden) {
        links.classList.remove("hide");
    } else {
        links.classList.add("hide");
    }
}