import confetti from "canvas-confetti";

function random(min, max) {
    return Math.random() * (max - min) + min;
}

export function startFireworks() {

    const duration = 10000;
    const end = Date.now() + duration;

    const colors = [
        "#ff0040",
        "#ff4d6d",
        "#ff85a1",
        "#ffd60a",
        "#38bdf8",
        "#22c55e",
        "#ffffff",
        "#9d4edd"
    ];

    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0.8,
        decay: 0.94,
        startVelocity: 45,
        zIndex: 99999,
        colors
    };

    const interval = setInterval(() => {

        const timeLeft = end - Date.now();

        if (timeLeft <= 0) {

            clearInterval(interval);

            // Final Blast
            confetti({
                particleCount: 400,
                spread: 360,
                startVelocity: 60,
                scalar: 1.5,
                origin: {
                    x: 0.5,
                    y: 0.45
                },
                colors
            });

            return;
        }

        const particleCount = 60;

        // Left Firework
        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: random(0.1, 0.3),
                y: random(0.2, 0.5)
            }
        });

        // Right Firework
        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: random(0.7, 0.9),
                y: random(0.2, 0.5)
            }
        });

        // Center Firework
        confetti({
            ...defaults,
            particleCount: 80,
            scalar: 1.3,
            origin: {
                x: 0.5,
                y: 0.35
            }
        });

        // Golden Sparkles
        confetti({
            particleCount: 20,
            angle: 90,
            spread: 180,
            startVelocity: 25,
            gravity: 0.5,
            scalar: 0.8,
            colors: ["#FFD700", "#FFF8DC"],
            origin: {
                x: Math.random(),
                y: 0
            }
        });

    }, 250);

}