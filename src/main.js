import "./css/style.css";
import "./css/animations.css";
import "./css/responsive.css";

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

    <h2 class="gallery-title">📸 Our Beautiful Memories ❤️</h2>

    <div class="phone-frame">

        <div class="phone-notch"></div>

        <img
            id="galleryImage"
            src="/images/photo1.jpeg"
            alt="Memory">

    </div>

</section>
    </div>

</div>


 <audio id="birthdayMusic" loop>

    <source
        src="/music/birthday.mp3"
        type="audio/mpeg">

</audio>
`;


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
initMusic();