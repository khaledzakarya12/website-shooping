var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect:"cube",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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

  function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
  }
  document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  video.play();
});
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

   const hamburger = document.getElementById('hamburger');
  const nava = document.querySelector('.nava');
  const icon = hamburger.querySelector('i');

  hamburger.addEventListener('click', () => {
    nava.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  let cartCount=0;
  function addtocart(){

 cartCount ++;
document.getElementById("cartCount").innerText=cartCount

  }
