import { animate, blockBody, unBlockBody } from './helpers';

const modal = () => {
  const requestModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');

  const openModal = () => {
    requestModal.style.top = '-30%';
    requestModal.style.display = 'block';
    overlay.style.display = 'block';
    blockBody();

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        requestModal.style.top = (progress * 50) + '%';
      }
    });
  };

  const closeModal = () => {
    requestModal.style.display = 'none';
    overlay.style.display = 'none';
    unBlockBody();
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('request-call') || e.target.closest('.request-call')) {
      e.preventDefault();
      openModal();
    } else if (e.target.classList.contains('header-modal__close') || !e.target.closest('.header-modal')) {
      closeModal();
    }
  });
};

export default modal;
