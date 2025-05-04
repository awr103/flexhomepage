// Simple About Section Carousel

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.about-carousel .carousel-slide');
    const leftArrow = document.querySelector('.about-carousel .carousel-arrow.left');
    const rightArrow = document.querySelector('.about-carousel .carousel-arrow.right');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
    }

    leftArrow.addEventListener('click', function() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });
    rightArrow.addEventListener('click', function() {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    // Optional: swipe support for mobile
    let startX = null;
    const track = document.querySelector('.about-carousel .carousel-track');
    if (track) {
        track.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        track.addEventListener('touchend', function(e) {
            if (startX === null) return;
            let endX = e.changedTouches[0].clientX;
            if (endX - startX > 50) {
                leftArrow.click();
            } else if (startX - endX > 50) {
                rightArrow.click();
            }
            startX = null;
        });
    }

    showSlide(current);
}); 