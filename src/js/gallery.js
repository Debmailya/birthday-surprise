export function initGallery() {

    const gallery = document.getElementById("gallery");

const photos=[

"/images/photo1.jpeg",
"/images/photo2.jpeg",
"/images/photo3.jpeg",
"/images/photo5.jpeg",
"/images/photo6.jpeg",
"/images/photo7.jpeg"

];
 
    let index = 0;

    gallery.innerHTML = `

        <img id="slide"
        class="gallery-image"
        src="${photos[0]}">

    `;

    const slide = document.getElementById("slide");

    setInterval(() => {

        index++;

        if(index>=photos.length){

            index=0;

        }

        slide.src=photos[index];

    },3000);

}
