const slider = () => {
  const servicesSlider = new Swiper('.our-services', {
    loop: true,
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

  const benefitsSlider = new Swiper('.our-benefits', {
    loop: true,
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });
};

export default slider;
