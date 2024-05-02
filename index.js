const hambuger = document.querySelector(".hambuger");
const hambugerDrop = document.querySelector(".hambuger-drop");

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    hambugerDrop.classList.toggle("active");
})