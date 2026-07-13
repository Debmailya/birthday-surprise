export function createLoveBubbles() {

    const container = document.getElementById("bubble-container");

    if (!container) return;

    // Prevent duplicate hearts
    container.innerHTML = "";

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💝",
        "💞"
    ];

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            (-100 - Math.random() * 300) + "px";

        heart.style.fontSize =
            (18 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        heart.style.animationDelay =
            (Math.random() * 5) + "s";

        heart.style.opacity =
            0.4 + Math.random() * 0.6;

        heart.style.filter =
            `blur(${Math.random() * 2}px)`;

        heart.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(heart);
    }
}