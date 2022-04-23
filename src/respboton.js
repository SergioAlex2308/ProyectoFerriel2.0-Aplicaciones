const AbrirToggle = document.querySelector(".abrir")
const Menucito = document.querySelector(".botones")

AbrirToggle.addEventListener("click", () => {
    Menucito.classList.toggle('visible')
} )