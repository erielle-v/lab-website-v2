/* ========= NAVBAR ========= */
const pageName = document.querySelector('.navbar a.active')?.textContent.trim() || "SP Lab";
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
    } else if (accumulated < -180 || currentY < 50) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = '';
        accumulated = -180;
    }
});

/* ========= GALLERY HIGHLIGHTS ========= */
const imgEl = document.querySelector(".gallery-image");
const captionEl = document.querySelector(".gallery-caption");
const leftBtn = document.querySelector(".gallery-section .arrow--left");
const rightBtn = document.querySelector(".gallery-section .arrow--right");

if (leftBtn && rightBtn) {
    let currentIndex = 0;

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
}

/* ========= FEATURED PUBLICATIONS ========= */
const featuredTitleEl = document.querySelector(".featured-title");
const featuredMetaEl = document.querySelector(".featured-meta");
const featuredBodyEl = document.querySelector(".featured-body");
const leftFeaturedBtn = document.querySelector(".featured-section .arrow--left");
const rightFeaturedBtn = document.querySelector(".featured-section .arrow--right");
if (leftFeaturedBtn && rightFeaturedBtn) {
    let featuredIndex = 0;

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
}

/* ========= TALKS & SEMINARS ========= */
const talksRoot = document.querySelector("#talks-root");

if (talksRoot && typeof talksData !== "undefined") {
    talksData.forEach(talk => {
        const card = document.createElement("div");
        card.className = "talk-card";

        let mediaHTML = "";

        if (talk.youtube) {
            const start = talk.start ? `?start=${talk.start}` : "";
            mediaHTML = `<iframe class="talk-embed" src="https://www.youtube.com/embed/${talk.youtube}${start}" allowfullscreen></iframe>`;
        } else if (talk.drive) {
            mediaHTML = `<iframe class="talk-embed" src="https://drive.google.com/file/d/${talk.drive}/preview" allowfullscreen></iframe>`;
        } else if (talk.audio) {
            mediaHTML = `<audio class="talk-audio" controls><source src="${talk.audio}"></audio>`;
        } else if (talk.link) {
            mediaHTML = "";
        }

        const titleHTML = talk.link
            ? `<h3 class="talk-title"><a href="${talk.link}" target="_blank">${talk.title}</a></h3>`
            : `<h3 class="talk-title">${talk.title}</h3>`;

        const externalLinkHTML = talk.externalLink
            ? `<a class="talk-external-link" href="${talk.externalLink}" target="_blank">${talk.externalLinkLabel || "Watch here"}</a>`
            : "";

        card.innerHTML = `
            ${mediaHTML}
            <div class="talk-info">
                ${titleHTML}
                <p class="talk-event">${talk.event}</p>
                <p class="talk-date">${talk.date}</p>
                ${externalLinkHTML}
            </div>
        `;

        talksRoot.appendChild(card);
    });
}

/* ========= GALLERY PAGE ========= */
const galleryRoot = document.querySelector("#gallery-root");

if (galleryRoot && typeof galleryData !== "undefined") {
    let allImages = [];
    let currentLightboxIndex = 0;

    galleryData.forEach(group => {
        const block = document.createElement("div");
        block.className = "gallery-year-block";

        block.innerHTML = `
            <div class="section-divider gallery-year-divider">
                <span class="divider-line"></span>
                <h2>${group.year}</h2>
                <span class="divider-line"></span>
            </div>
            <div class="gallery-grid"></div>
        `;

        const grid = block.querySelector(".gallery-grid");
        const startIndex = allImages.length;

        group.images.forEach((src, i) => {
            allImages.push(src);
            const img = document.createElement("img");
            img.src = src;
            img.className = "gallery-thumb";
            img.alt = `${group.year} photo`;
            img.addEventListener("click", () => openLightbox(startIndex + i));
            grid.appendChild(img);
        });

        galleryRoot.appendChild(block);
    });

    /* LIGHTBOX */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");

    function openLightbox(index) {
        currentLightboxIndex = index;
        lightboxImg.src = allImages[index];
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";

        const next = (index + 1) % allImages.length;
        const prev = (index - 1 + allImages.length) % allImages.length;
        new Image().src = allImages[next];
        new Image().src = allImages[prev];
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    lightboxPrev.addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + allImages.length) % allImages.length;
        lightboxImg.src = allImages[currentLightboxIndex];
    });

    lightboxNext.addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % allImages.length;
        lightboxImg.src = allImages[currentLightboxIndex];
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowLeft") lightboxPrev.click();
        if (e.key === "ArrowRight") lightboxNext.click();
        if (e.key === "Escape") closeLightbox();
    });
}