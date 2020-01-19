function initializeImageLightboxes() {
    Array.prototype.forEach.call(document.getElementsByTagName("img"), imageElement => {
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
    fullscreenImageElement.onclick = () => {
        document.body.removeChild(backdropElement);
        document.body.removeChild(fullscreenImageElement);
    }

    document.body.appendChild(backdropElement);
    document.body.appendChild(fullscreenImageElement);
}

initializeImageLightboxes();