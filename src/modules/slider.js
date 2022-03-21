import Swiper, { Navigation, Autoplay } from 'swiper';

const slider = () => {
  const swiper = new Swiper('.our-services', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.services__arrow--right',
      prevEl: '.services__arrow--left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 40,
      }
    }
  });
};

export default slider;
