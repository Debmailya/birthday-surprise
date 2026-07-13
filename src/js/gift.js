import { createBalloons } from "./balloons.js";
import { createLoveBubbles } from "./bubbles.js";
import { startFireworks } from "./fireworks.js";

export function initGift() {
    const giftBox = document.getElementById("giftBox");
    const openButton = document.getElementById("openGift");

    const giftSection = document.getElementById("giftSection");
    const birthdaySection = document.getElementById("birthdaySection");

    const music = document.getElementById("birthdayMusic");

    if (!giftBox || !openButton) return;

    function openGift() {

        // Disable button after first click
        openButton.disabled = true;

        // Animate gift
        giftBox.classList.add("openGift");

        // Play music
        if (music) {
            music.volume = 0.5;
            music.play().catch(() => {});
        }

        // Start balloons
        createBalloons();

        // Start hearts
        createLoveBubbles();

        // Show birthday page
        setTimeout(() => {

            giftSection.classList.add("hidden");
            birthdaySection.classList.remove("hidden");
            birthdaySection.classList.add("fadeIn");

        }, 1200);

        // Fireworks
        setTimeout(() => {

            startFireworks();

        }, 1800);

    }

    openButton.addEventListener("click", openGift);

    giftBox.addEventListener("click", openGift);
}