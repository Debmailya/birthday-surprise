import { startFireworks } from "./fireworks.js";

export function initCandle() {

    const blowBtn = document.getElementById("blowBtn");
    const birthdayMusic = document.getElementById("birthdayMusic");

    if (!blowBtn) return;

    blowBtn.addEventListener("click", () => {

        const flame = document.getElementById("flame");

        if (flame) {
            flame.classList.add("blown");
        }

        blowBtn.disabled = true;
        blowBtn.innerHTML = "🎉 Wish Made!";

        // Fireworks
        startFireworks();

        // Play music
        if (birthdayMusic) {
            birthdayMusic.play().catch(() => {});
        }

        // Show birthday popup after 1 second
        setTimeout(() => {

            const message = document.createElement("div");

            message.className = "wish-popup";

            message.innerHTML = `
                <h1>🎂 Happy Birthday ❤️</h1>

                <h2>May all your dreams come true ✨</h2>

                <p>
                    Wishing you happiness, success,
                    love and lots of unforgettable memories.
                </p>
            `;

            // IMPORTANT
            document.body.appendChild(message);

            // Show popup
            setTimeout(() => {
                message.classList.add("show");
            }, 100);

            // Hide popup after 5 seconds
            setTimeout(() => {

                message.classList.remove("show");

                setTimeout(() => {

                    message.remove();

                    // Show Open Letter button
                    document
                        .getElementById("letterSection")
                        ?.classList.remove("hidden");

                }, 500);

            }, 5000);

        }, 1000);

    });

}