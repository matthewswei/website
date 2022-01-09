const navbar = document.getElementById("nav");
var position = navbar.offsetTop;
function navBarSticky() {
    if (window.pageYOffset>=position) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
window.addEventListener('scroll', navBarSticky);