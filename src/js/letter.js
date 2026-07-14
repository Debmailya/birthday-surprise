export function initLetter() {

    const btn = document.getElementById("openLetterBtn");

    const page = document.getElementById("loveLetterPage");

    btn.addEventListener("click", () => {

        page.classList.remove("hidden");

        page.classList.add("show");

    });

}