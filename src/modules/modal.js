import { animate, blockBody, unBlockBody } from './helpers';

const modal = () => {
  const requestModal = document.querySelector('.header-modal');
  const serviceModal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');

  const openModal = (elem) => {
    elem.style.top = '-30%';
    elem.style.display = 'block';
    overlay.style.display = 'block';
    blockBody();

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        elem.style.top = (progress * 50) + '%';
      }
    });
  };

  const closeModal = (elem) => {
    elem.style.display = 'none';
    overlay.style.display = 'none';
    unBlockBody();
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('request-call') || e.target.closest('.request-call')) {
      e.preventDefault();
      openModal(requestModal);
    } else if (e.target.classList.contains('call-measurer')) {
      e.preventDefault();
      openModal(serviceModal);
    } else if (e.target.classList.contains('header-modal__close')) {
      closeModal(requestModal);
    } else if (e.target.classList.contains('services-modal__close')) {
      closeModal(serviceModal);
    } else if (e.target.classList.contains('overlay')) {
      closeModal(requestModal);
      closeModal(serviceModal);
    }
  });
};

export default modal;
