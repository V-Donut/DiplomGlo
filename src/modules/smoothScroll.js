const smoothScroll = () => {
  const scrollBtn = document.querySelector('.smooth-scroll');
  const firstSection = document.querySelector('.section');
  const sectionCoordinates = firstSection.getBoundingClientRect();

  scrollBtn.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > sectionCoordinates.top) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    document.querySelector('#header').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

export default smoothScroll;