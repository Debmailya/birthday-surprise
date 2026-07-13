export function initMusic() {

    const music = document.getElementById("birthdayMusic");

    const startBtn = document.getElementById("startBtn");

    if (!music || !startBtn) return;

    music.volume = 0.5;

    startBtn.addEventListener("click", () => {

        music.play().catch(() => {});

    });

}