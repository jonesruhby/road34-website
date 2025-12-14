
export function initShopPage() {
    // 1. Hero Slider Logic
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000); // 4 seconds per slide
    }

    // 2. Service Toggle Logic
    const btnCommuter = document.getElementById('btn-commuter');
    const btnMtb = document.getElementById('btn-mtb');
    const contentCommuter = document.getElementById('content-commuter');
    const contentMtb = document.getElementById('content-mtb');

    if (btnCommuter && btnMtb) {
        btnCommuter.addEventListener('click', () => {
            // UI State
            btnCommuter.classList.add('active');
            btnMtb.classList.remove('active');
            // Content State
            contentCommuter.classList.add('active');
            contentMtb.classList.remove('active');
        });

        btnMtb.addEventListener('click', () => {
            // UI State
            btnMtb.classList.add('active');
            btnCommuter.classList.remove('active');
            // Content State
            contentMtb.classList.add('active');
            contentCommuter.classList.remove('active');
        });
    }
}

if (window.location.pathname.endsWith('shop.html')) {
    document.addEventListener('DOMContentLoaded', initShopPage);
}
