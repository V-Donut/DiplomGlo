import { animate, blockBody, unBlockBody } from './helpers';

const modal = () => {
  const requestModal = document.querySelector('.header-modal');
  const serviceModal = document.querySelector('.services-modal');
  const imageModal = document.querySelector('.image-modal');
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
    } else if (e.target.classList.contains('document-overlay')) {
      e.preventDefault();
      const image = e.target.parentNode.getAttribute('href');
      const modalBody = imageModal.querySelector('.box-modal_body');
      const newElem = document.createElement('img');
      newElem.style.width = '100%';
      newElem.setAttribute('src', image);
      modalBody.innerHTML = '';
      modalBody.append(newElem);
      openModal(imageModal);
    } else if (e.target.classList.contains('header-modal__close')) {
      closeModal(requestModal);
    } else if (e.target.classList.contains('image-modal__close')) {
      closeModal(imageModal);
    } else if (e.target.classList.contains('services-modal__close')) {
      closeModal(serviceModal);
    } else if (e.target.classList.contains('overlay')) {
      closeModal(requestModal);
      closeModal(serviceModal);
      closeModal(imageModal);
    }
  });
};

export default modal;
