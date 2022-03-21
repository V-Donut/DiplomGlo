const smoothScroll = () => {
  const scrollBtn = document.querySelector('.smooth-scroll');
  const firstSection = document.querySelector('.section');

  const visibilityChange = () => {
    if (window.pageYOffset > firstSection.offsetTop) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };

  window.addEventListener('load', () => {
    visibilityChange();
  });

  window.addEventListener('scroll', () => {
    visibilityChange();
  });

  scrollBtn.addEventListener('click', () => {
    document.querySelector('#header').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

export default smoothScroll;