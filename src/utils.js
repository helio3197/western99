const displayRates = (value, rates) => {
  const input = document.getElementById('calc-input');
  const output = document.getElementById('calc-output');
  const selectedRate = document.getElementById('calc-rate');

  switch (value) {
    case 'pen-bs':
      input.classList.toggle('pen', true);
      input.classList.toggle('usd', false);
      output.classList.toggle('bs', true);
      output.classList.toggle('pen', false);
      selectedRate.innerHTML = `Tasa: 1 PEN = ${rates.penBs} Bs`;
      return 'penBs';
    case 'usd-pen':
      input.classList.toggle('usd', true);
      input.classList.toggle('pen', false);
      output.classList.toggle('pen', true);
      output.classList.toggle('bs', false);
      selectedRate.innerHTML = `Tasa: 1 USD = ${rates.usdPen} Bs`;
      return 'usdPen';
    case 'usd-bs':
      input.classList.toggle('usd', true);
      input.classList.toggle('pen', false);
      output.classList.toggle('bs', true);
      output.classList.toggle('pen', false);
      selectedRate.innerHTML = `Tasa: 1 USD = ${rates.usdBs} Bs`;
      return 'usdBs';
    default:
      return undefined;
  }
};

const exhangeCalc = (amount, factor) => amount * factor;

const carouselHandler = (picsArr, media1, media2) => {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselIndicators = document.querySelector('.carousel-indicators');
  carouselInner.innerHTML = '';
  carouselIndicators.innerHTML = '';

  if (media1.matches) {
    if (media2.matches) {
      const slidesNum = Math.ceil(picsArr.length / 3);
      const carouselItems = [];
      let temp = '';
      picsArr.forEach((element, index) => {
        temp += `<img src="${element.path}" class="slide-image" alt="${element.alt}">`;
        if ((index + 1) % 3 === 0) {
          carouselItems.push(temp);
          temp = '';
        }
      });
      if (temp) carouselItems.push(temp);
      for (let i = 0; i < slidesNum; i += 1) {
        carouselIndicators.innerHTML += `<li data-bs-target="#carousel-venbanks" data-bs-slide-to="${i}"></li>`;
        carouselInner.innerHTML += `
        <div class="carousel-item">
          <div class="d-flex">
            ${carouselItems[i]}
          </div>
        </div>`;
      }
      carouselIndicators.getElementsByTagName('li')[0].classList.add('active');
      carouselInner.getElementsByClassName('carousel-item')[0].classList.add('active');
    } else {
      const slidesNum = Math.ceil(picsArr.length / 2);
      const carouselItems = [];
      let temp = '';
      picsArr.forEach((element, index) => {
        temp += `<img src="${element.path}" class="slide-image" alt="${element.alt}">`;
        if (index % 2 !== 0) {
          carouselItems.push(temp);
          temp = '';
        }
      });
      if (temp) carouselItems.push(temp);
      for (let i = 0; i < slidesNum; i += 1) {
        carouselIndicators.innerHTML += `<li data-bs-target="#carousel-venbanks" data-bs-slide-to="${i}"></li>`;
        carouselInner.innerHTML += `
        <div class="carousel-item">
          <div class="d-flex">
            ${carouselItems[i]}
          </div>
        </div>`;
      }
      carouselIndicators.getElementsByTagName('li')[0].classList.add('active');
      carouselInner.getElementsByClassName('carousel-item')[0].classList.add('active');
    }
  } else {
    for (let i = 0; i < picsArr.length; i += 1) {
      carouselIndicators.innerHTML += `<li data-bs-target="#carousel-venbanks" data-bs-slide-to="${i}"></li>`;
      carouselInner.innerHTML += `
      <div class="carousel-item">
        <img src="${picsArr[i].path}" class="slide-image" alt="${picsArr[i].alt}">
      </div>`;
    }
    carouselIndicators.getElementsByTagName('li')[0].classList.add('active');
    carouselInner.getElementsByClassName('carousel-item')[0].classList.add('active');
  }
};

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const contactFormHandler = (e) => {
  const openFormBtn = e.currentTarget;

  openFormBtn.classList.add('contact-btn-clicked');
  openFormBtn.innerHTML = '<svg width="44" height="44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>';

  openFormBtn.removeEventListener('click', contactFormHandler);

  const contactModal = document.getElementById('contact-modal');

  contactModal.classList.replace('contact-form-notvisible', 'contact-form-visible');

  const closeModalMobileBtn = document.getElementById('close-contact-modal');

  const closeModalMobile = () => {
    openFormBtn.click();
  };

  closeModalMobileBtn.addEventListener('click', closeModalMobile);

  const closeForm = (e) => {
    const closeFormBtn = e.currentTarget;

    closeFormBtn.classList.remove('contact-btn-clicked');
    closeFormBtn.innerHTML = '<svg width="44" height="44" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><path d="M7 12L17 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 8L13 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" stroke="currentColor" stroke-width="1.5"/></svg><span class="fw-bold fs-5 ms-2">¡Escríbenos!</span>';

    contactModal.classList.replace('contact-form-visible', 'contact-form-notvisible');

    closeFormBtn.removeEventListener('click', closeForm);
    closeFormBtn.addEventListener('click', contactFormHandler);

    closeModalMobileBtn.removeEventListener('click', closeModalMobile);
  };

  openFormBtn.addEventListener('click', closeForm);
};

export {
  exhangeCalc, displayRates, carouselHandler, animateValue, contactFormHandler,
};