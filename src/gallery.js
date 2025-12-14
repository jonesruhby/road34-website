
export function initGallery() {
    const gallery = document.querySelector('.gallery-track');
    if (!gallery) return;

    // Image sources - Updated with uploaded user images
    const images = [
        'images/gallery/gallery-01.png',
        'images/gallery/gallery-02.png',
        'images/gallery/gallery-03.png',
        'images/gallery/gallery-04.png',
        'images/gallery/gallery-05.png'
    ];

    let currentIndex = 0;

    // 1. Initial Render: Create DOM elements for all images
    gallery.innerHTML = '';
    const itemElements = images.map((src, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item'; // Base class
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        div.appendChild(img);
        gallery.appendChild(div);
        return div;
    });

    // 2. Update Function: Assigns classes based on currentIndex
    function updateGallery() {
        itemElements.forEach((el, i) => {
            // Reset classes
            el.className = 'gallery-item';

            // Calculate distance relative to current index
            // handling wrap-around for indices
            // We need persistent mapping for "Left, Center, Right"

            // Simple logic for 5 items:
            // Center = currentIndex
            // Left = currentIndex - 1
            // Right = currentIndex + 1
            // Others = hidden

            const len = images.length;

            // Indices
            const centerIdx = currentIndex;
            const leftIdx = (currentIndex - 1 + len) % len;
            const rightIdx = (currentIndex + 1) % len;

            if (i === centerIdx) {
                el.classList.add('center');
            } else if (i === leftIdx) {
                el.classList.add('left');
            } else if (i === rightIdx) {
                el.classList.add('right');
            } else {
                // Determine if it should be hidden-left or hidden-right for animation direction
                // If it was just 'left', it goes to 'hidden-left'
                // This state persistence is tricky without history.
                // Simplified: Just hide them.
                // For "slide to left" flow: Right -> Center -> Left -> Hidden
                el.classList.add('hidden-left'); // Default to hidden

                // If we want a true loop, we can just position them off stage?
            }
        });
    }

    // Initial State
    updateGallery();

    // Auto flip (Slide Left)
    setInterval(() => {
        // "Slide to left" means items move Left.
        // Item at Right (idx 1) goes to Center (idx 0).
        // Item at Center (idx 0) goes to Left (idx -1).

        // So we increment index?
        // If index increments: 0 -> 1.
        // Old Center(0) becomes Left.
        // Old Right(1) becomes Center.
        // Old NextRight(2) becomes Right.

        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }, 4500); // 4.5 seconds
}

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', initGallery);
}
