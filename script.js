const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

// Function to update slide position
function updateSlidePosition(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition(currentIndex);
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition(currentIndex);
});

// Automatic sliding
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition(currentIndex);
}, 3000);
