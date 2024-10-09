let currentIndex1 = 0;
let currentIndex2 = 0;

const carouselTrack1 = document.querySelectorAll('.carousel-track')[0];
const carouselTrack2 = document.querySelectorAll('.carousel-track')[1];

const totalImages1 = carouselTrack1.children.length;
const totalImages2 = carouselTrack2.children.length;

function rotateCarouselImages(carouselTrack, currentIndex, totalImages) {
  currentIndex = (currentIndex + 1) % totalImages;
  carouselTrack.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;
  return currentIndex;
}

setInterval(() => {
  currentIndex1 = rotateCarouselImages(carouselTrack1, currentIndex1, totalImages1);
}, 5000); // Cambia cada 5 segundos para el primer carrusel

setInterval(() => {
  currentIndex2 = rotateCarouselImages(carouselTrack2, currentIndex2, totalImages2);
}, 5000); // Cambia cada 5 segundos para el segundo carrusel
