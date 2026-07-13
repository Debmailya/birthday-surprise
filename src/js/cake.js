export function initCake() {

    const cakeArea = document.getElementById("cakeArea");

    if (!cakeArea) return;

    cakeArea.innerHTML = `

    <div class="cake">

        <div class="plate"></div>

        <div class="layer layer-bottom"></div>

        <div class="layer layer-middle"></div>

        <div class="layer layer-top"></div>

        <div class="icing"></div>

        <div class="drips drip1"></div>
        <div class="drips drip2"></div>
        <div class="drips drip3"></div>

        <div class="candle">

            <div class="flame" id="flame"></div>

        </div>

    </div>

    `;

}