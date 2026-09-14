/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function (element) {
        const elementPosition =
            element.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 100;

        if (elementPosition < screenPosition) {
            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();