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

export { exhangeCalc, displayRates, carouselHandler };