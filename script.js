const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slider = document.querySelectorAll(".head-section-slide")
const btn = document.querySelector(".drop-btn")
const nav = document.querySelector(".nav")

btn.addEventListener("click", () => {
    btn.classList.toggle("active")
})
function openIcon() {
    nav.style.display = ("block")
}
function closeIcon() {
    nav.style.display = ("none")
}






let counter = 1;
slideFun(counter);

let timer = setInterval(autoslide, 8000)
function autoslide() {
    counter += 1;
    slideFun(counter);
}
function slideBtn(n) {
    counter += n;
    slideFun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slideFun(n) {
    let i;
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none"

    }
    if (n > slider.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = slider.length;
    }
    slider[counter - 1].style.display = "flex";
}









