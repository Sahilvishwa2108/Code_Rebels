function startSlideShow() {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slide-image');

    function showSlide(n) {
        if (n >= slides.length) {
            currentSlide = 0;
        }

        for (slide of slides) {
            slide.style.display = 'none';
        }

        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // Initial call to display the first slide
    showSlide(currentSlide);

    // Automatically advance the slideshow every 3 seconds (3000 milliseconds)
    setInterval(nextSlide, 3000);
}

// Start the slideshow when the page is loaded
window.addEventListener('load', startSlideShow);