import "./css/style.css";
import "./css/animations.css";
import "./css/responsive.css";
import { initLetter } from "./js/letter.js";

import { initGift } from "./js/gift.js";
import { createBalloons } from "./js/balloons.js";
import { createLoveBubbles } from "./js/bubbles.js";
import { initCake } from "./js/cake.js";
import { initCandle } from "./js/candle.js";
import { initGallery } from "./js/gallery.js";
import { initMusic } from "./js/music.js";

document.querySelector("#app").innerHTML = `
<div id="loadingScreen">

    <div class="loader">

        <h1>🎉 Happy Birthday 🎉</h1>

        <p>Preparing your surprise...</p>

        <div class="spinner"></div>

    </div>

</div>


<div id="mainPage" class="hidden">

    <div id="background"></div>

    <div id="balloon-container"></div>

    <div id="bubble-container"></div>

    <section class="hero">

        <h1 class="title">
           ❤️ Happy Birthday ❤️
        </h1>

        <h2>
           ❤️MUNNU❤️
           </h2>

           <h3>
           ❤️most important person to me ❤️
           </h3>

        <p class="subtitle">
            Today is all about YOU ✨
        </p>

        <button id="startBtn">
            Start Surprise 🎁
        </button>

    </section>

</div>


<div id="giftSection" class="hidden">

    <div class="gift-wrapper">

        <div id="giftBox">

            🎁

        </div>

        <button id="openGift">
            Open Gift
        </button>

    </div>

</div>



<div id="birthdaySection" class="hidden">

    <div class="birthday-content">

        <h1>
            🎂 Happy Birthday 🎂
        </h1>

        <h2>
            Wishing you Happiness, Love & Success ❤️
        </h2>

        <div id="cakeArea"></div>

        <button id="blowBtn">
            Blow Candle 💨
        </button>

        <div id="gallery"></div>
       <section class="gallery-section">

    <h2 class="gallery-title">📸 Beautiful Memories  of yours ❤️</h2>

    <div class="phone-frame">

        <div class="phone-notch"></div>

        <img
            id="galleryImage"
            src="/images/photo1.jpeg"
            alt="Memory">

    </div>
<div id="letterSection" class="hidden">

    <h2>❤️ One Last Surprise ❤️</h2>

    <button id="openLetterBtn">
        💌 Open My Love Letter
    </button>

</div>
    </div>   <!-- birthdaySection ends -->

<!-- LOVE LETTER POPUP -->
<div id="specialPopup" class="popup-overlay hidden">

    <div class="envelope">

        <div class="envelope-back"></div>

        <div class="envelope-flap"></div>

        <div class="letter">

            <button id="closePopup">✖</button>

            <div class="love-photo">

                <img
                    src="/images/photo7.jpeg"
                    alt="Munnu">

            </div>

            <h2>💌 To My Dearest Munnu 💌</h2>

            <p class="love-text">
                Happy Birthday, My Love ❤️

                <br><br>
                Today isn't just another day—
                it's the day the world was blessed
                with someone as wonderful as you.
                <br><br>
                Your smile brightens my darkest days,
                your kindness inspires me,
                and your presence makes every moment
                feel a little more beautiful.
                <br><br>
                Thank you for being the amazing person
                you are.
                <br><br>
                ✨ You are precious.
                <br>
                ✨ You are loved.
                <br>
                ✨ You will always be special to me.
                <br><br>
                Happy Birthday once again,
                my beautiful Munnu. 🎂❤️
                <br><br>
                ❤️ Yours Forever ❤️
            </p>


        </div>

    </div>

</div>


<audio id="birthdayMusic" loop>

    <source
        src="/music/birthday.mp3"
        type="audio/mpeg">

</audio>`;
window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loadingScreen")
            .classList.add("hidden");

        document
            .getElementById("mainPage")
            .classList.remove("hidden");

    }, 2500);

});

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document
        .getElementById("mainPage")
        .classList.add("hidden");

    document
        .getElementById("giftSection")
        .classList.remove("hidden");

});



initGift();
createBalloons();
createLoveBubbles();
initCake();
initCandle();
initGallery();
initLetter();
initMusic();


const openLetterBtn = document.getElementById("openLetterBtn");

if (openLetterBtn) {

    openLetterBtn.addEventListener("click", () => {

        // Hide the button
        document
            .getElementById("letterSection")
            .classList.add("hidden");

        // Show the love letter
        document
            .getElementById("loveLetterPage")
            .classList.remove("hidden");

        // Automatically close after 30 seconds
        setTimeout(() => {

            document
                .getElementById("loveLetterPage")
                .classList.add("hidden");

        }, 30000);

    });

}
