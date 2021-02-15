//Menu responsivo
let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

/*menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})*/
function clicar () {
    menuSection.classList.toggle("on", show)
    show = !show;
}