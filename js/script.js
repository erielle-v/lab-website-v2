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

/* ========= GALLERY HIGHLIGHTS ========= */
let currentIndex = 0;

const imgEl = document.querySelector(".gallery-image");
const captionEl = document.querySelector(".gallery-caption");

const leftBtn = document.querySelector(".gallery-section .arrow--left");
const rightBtn = document.querySelector(".gallery-section .arrow--right");

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

/* ========= FEATURED PUBLICATIONS ========= */
let featuredIndex = 0;

const featuredTitleEl = document.querySelector(".featured-title");
const featuredMetaEl = document.querySelector(".featured-meta");
const featuredBodyEl = document.querySelector(".featured-body");

const leftFeaturedBtn = document.querySelector(".featured-section .arrow--left");
const rightFeaturedBtn = document.querySelector(".featured-section .arrow--right");

function updateFeatured(index) {
    if (!featuredPublications?.length) return;

    const item = featuredPublications[index];
    if (!item) return;

    featuredTitleEl.textContent = item.title;
    if (item.link) {
        featuredTitleEl.href = item.link;
        featuredTitleEl.style.pointerEvents = '';
    } else {
        featuredTitleEl.removeAttribute('href');
        featuredTitleEl.style.pointerEvents = 'none';
    }

    const metaParts = [];
    if (item.journal) metaParts.push(item.journal);
    if (item.year) metaParts.push(item.year);

    featuredMetaEl.textContent = metaParts.join(" · ");
    featuredBodyEl.textContent = item.text || "";
}

leftFeaturedBtn.addEventListener("click", () => {
    featuredIndex = (featuredIndex - 1 + featuredPublications.length) % featuredPublications.length;
    updateFeatured(featuredIndex);
});

rightFeaturedBtn.addEventListener("click", () => {
    featuredIndex = (featuredIndex + 1) % featuredPublications.length;
    updateFeatured(featuredIndex);
});

updateFeatured(featuredIndex);