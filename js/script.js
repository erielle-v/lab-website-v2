/* ========= NAVBAR ========= */
const pageName = "Home";
document.title = `${pageName} | SP Lab`;

const navbar = document.querySelector('.navbar');
let lastY = window.scrollY;
let accumulated = 0;

window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    accumulated += currentY - lastY;
    lastY = currentY;
    if (accumulated > 180) {
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
        accumulated = 180;
    } else if (accumulated < -180) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = '';
        accumulated = -180;
    }
});

/* ========= GALLERY ========= */

let currentIndex = 0;

const imgEl = document.querySelector(".gallery-image");
const captionEl = document.querySelector(".gallery-caption");

const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

function updateGallery(index) {
    if (!galleryImages?.length) return;

    const item = galleryImages[index];
    if (!item) return;

    imgEl.src = item.image;
    captionEl.textContent = item.caption;
}

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery(currentIndex);
});

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGallery(currentIndex);
});

updateGallery(currentIndex);