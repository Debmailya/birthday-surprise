export function createBalloons() {

    const container = document.getElementById("balloon-container");

    if (!container) return;

    // Prevent duplicate balloons
    container.innerHTML = "";

    const balloons = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];

    for (let i = 0; i < 40; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.innerHTML =
            balloons[Math.floor(Math.random() * balloons.length)];

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.fontSize =
            30 + Math.random() * 50 + "px";

        balloon.style.animationDuration =
            5 + Math.random() * 8 + "s";

        balloon.style.animationDelay =
            Math.random() * 5 + "s";

        balloon.style.opacity =
            0.6 + Math.random() * 0.4;

        balloon.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(balloon);
    }
}