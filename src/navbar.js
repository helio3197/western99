const mobileDesktopSwap = (mediaQuery) => {
  const navSlide = document.getElementById('navbar-slide');
  if (mediaQuery.matches) {
    navSlide.classList.toggle('offcanvas', false);
    navSlide.classList.toggle('offcanvas-start', false);
    navSlide.classList.toggle('visible', true);
    const closeMenu = document.getElementById('closeMenu');
    closeMenu.click();
  } else {
    navSlide.classList.toggle('offcanvas', true);
    navSlide.classList.toggle('offcanvas-start', true);
    navSlide.classList.toggle('visible', false);
  }
};

export { mobileDesktopSwap as default };
