function redirectToPage(event) {
  var cardElement = event.currentTarget;
  var heading = cardElement.querySelector(".title").textContent;
  var imageSrc = cardElement.querySelector(".image").src;
  var encodedHeading = encodeURIComponent(heading);
  var encodedImageSrc = encodeURIComponent(imageSrc);
  window.location.href = "product.html?heading=" + encodedHeading + "&imageSrc=" + encodedImageSrc;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});