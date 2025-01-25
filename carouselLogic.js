let currentSlideIndex = 0;

// Select carousel elements
const track = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Move slides by updating the transform property
function moveSlide(direction) {
  currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

// Recalculate slide position on window resize
window.addEventListener('resize', () => {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;


});
