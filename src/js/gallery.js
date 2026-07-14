export function initGallery() {

    const gallery = document.getElementById("gallery");

    if (!gallery) return;

    const photos = [
        "/images/photo1.jpeg",
        "/images/photo2.jpeg",
        "/images/photo3.jpeg",
        "/images/photo5.jpeg",
        "/images/photo6.jpeg",
        "/images/photo7.jpeg",
        "/images/photo8.jpeg"
    ];

    let index = 0;

    gallery.innerHTML = `
        <img
            id="slide"
            class="gallery-image"
            src="${photos[0]}"
            alt="Memory">
    `;

    const slide = document.getElementById("slide");

    const interval = setInterval(() => {

        index++;

        // Show next photo
        if (index < photos.length) {

            slide.src = photos[index];

        } else {

            // Stop slideshow
            clearInterval(interval);

            // Show love letter after last photo
            setTimeout(() => {

                document
                    .getElementById("specialPopup")
                    ?.classList.remove("hidden");

            }, 2500);

        }

    }, 3000);

}
