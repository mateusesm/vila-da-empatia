//Menu responsivo
let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

function clicar () {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
}

//Outra maneira de construir menu
/*menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})*/