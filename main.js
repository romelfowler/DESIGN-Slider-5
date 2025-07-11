

const swiper = new Swiper('.swiper', {
  // pass EffectShutters to modules
  modules: [EffectShutters],
  // enable "shutters" effect
  effect: 'shutters',
  // shutters effect parameters
  shuttersEffect: {
    split: 5,
  },
  speed: 900,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
window.swiper = swiper;
