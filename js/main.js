
//Menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});
//Menu toggle

// Carousel

  $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      center: true, 
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 2000,
      items: 3,
  });

  const $carousel = $(".main_carousel");
  const $toggleBtn = $(".toggleBtn");
  let isPaused = false;
  
  $toggleBtn.on("click", function () {
      if (isPaused) {
        $carousel.trigger("play.owl.autoplay", [3000]);
        $toggleBtn.removeClass("play").addClass("pause");
      } else {
        $carousel.trigger("stop.owl.autoplay");
        $toggleBtn.removeClass("pause").addClass("play");
      }
      isPaused = !isPaused;
  });

  // Append the button into Owl Carousel's .owl-nav
  const $toggleBtn1 = $(".toggleBtn1");
  const $toggleBtn2 = $(".toggleBtn2");
  $('#classes .owl-nav').append($toggleBtn1);
  $('#updates .owl-nav').append($toggleBtn2);
  
// Carousel

// Accordion
const headers = document.querySelectorAll('.accord h2');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const currentLi = header.parentElement;
    const isActive = currentLi.classList.contains('active');

    document.querySelectorAll('.accord li').forEach(li => li.classList.remove('active'));

    if (!isActive) {
      currentLi.classList.add('active');
    }
  });
});
// Accordion