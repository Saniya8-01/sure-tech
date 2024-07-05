// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }
//     const offset = -currentSlide * 100;
//     document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// showSlide(currentSlide);

// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     const totalSlides = slides.length;

//     slides.forEach(slide => slide.classList.remove('active', 'fade-in'));

//     if (index >= totalSlides) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = totalSlides - 1;
//     } else {
//         currentSlide = index;
//     }

//     slides[currentSlide].classList.add('active', 'fade-in');
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// showSlide(currentSlide);
// setInterval(nextSlide, 1500);
