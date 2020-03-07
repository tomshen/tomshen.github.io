function initializeImageLightboxes() {
    const IMAGE_LIGHTBOX_CLASS = "lightbox";
    Array.prototype.forEach.call(document.getElementsByTagName("img"), imageElement => {
        imageElement.classList.add(IMAGE_LIGHTBOX_CLASS)
        imageElement.onclick = () => {
            createLightbox(imageElement);
        };
    });
}

function createLightbox(imageElement) {
    const IMAGE_FULLSCREEN_CLASS = "fullscreen";
    const BACKDROP_CLASS = "backdrop";

    const backdropElement = document.createElement("div");
    backdropElement.classList.add(BACKDROP_CLASS);

    const fullscreenImageElement = imageElement.cloneNode();
    fullscreenImageElement.classList.add(IMAGE_FULLSCREEN_CLASS);

    const removeLightbox = () => {
        document.body.removeChild(backdropElement);
        document.body.removeChild(fullscreenImageElement);
    };
    backdropElement.onclick = removeLightbox;
    fullscreenImageElement.onclick = removeLightbox;

    document.body.appendChild(backdropElement);
    document.body.appendChild(fullscreenImageElement);
}

initializeImageLightboxes();
