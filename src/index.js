import './style.scss';
import placeholder2 from './assets/placeholder-2.png';
import mobileDesktopSwap from './navbar.js';
import {
  exhangeCalc, displayRates, carouselHandler, animateValue, contactFormHandler,
} from './utils.js';

// dummy data
const exchangeRates = {
  penBs: '123',
  usdPen: '12',
  usdBs: '12345',
  date: '27/02/2022',
};
const carouselimages = [
  { path: placeholder2, alt: 'Slide 1' },
  { path: placeholder2, alt: 'Slide 2' },
  { path: placeholder2, alt: 'Slide 3' },
  { path: placeholder2, alt: 'Slide 4' },
];

// set current day for selected elements
document.querySelectorAll('.current-date').forEach((element) => { element.innerHTML = exchangeRates.date; });

// mobile manu handler
const mobileDesktopQuery = window.matchMedia('(min-width: 992px)');

mobileDesktopQuery.addEventListener('change', mobileDesktopSwap);
mobileDesktopSwap(mobileDesktopQuery);

// display daily exchange rates
document.getElementById('penBs-rate').innerHTML += `${exchangeRates.penBs} Bs`;
document.getElementById('usdPen-rate').innerHTML += `${exchangeRates.usdPen} Pen`;
document.getElementById('usdBs-rate').innerHTML += `${exchangeRates.usdBs} Bs`;

// utility: exchange calculator
const operation = document.getElementById('select-op');
const inputCalc = document.getElementById('enter-value');
const outputCalc = document.getElementById('result-op');
// **default selection**
const selection = displayRates(operation.value, exchangeRates);

inputCalc.addEventListener('input', (e) => {
  const { value } = e.target;
  if (value.length > 15) e.target.value = e.target.value.slice(0, 15);
  else outputCalc.innerHTML = `${exhangeCalc(value, exchangeRates[selection])}`;
});
// **dynamic selection**
operation.addEventListener('change', (e) => {
  const { value } = e.target;
  const selection = displayRates(value, exchangeRates);

  // assign listener with selected rate to calc
  outputCalc.innerHTML = `${exhangeCalc(inputCalc.value, exchangeRates[selection])}`;

  inputCalc.addEventListener('input', (e) => {
    const { value } = e.target;
    if (value.length > 15) e.target.value = e.target.value.slice(0, 15);
    else outputCalc.innerHTML = `${exhangeCalc(value, exchangeRates[selection])}`;
  });
});
// clear btn
document.getElementById('calc-clear').addEventListener('click', () => {
  inputCalc.value = '';
  outputCalc.value = '0';
});

// payment methods carousel
const media920 = window.matchMedia('(min-width: 920px)');
const media1400 = window.matchMedia('(min-width: 1400px)');

carouselHandler(carouselimages, media920, media1400);

media920.addEventListener('change', () => {
  carouselHandler(carouselimages, media920, media1400);
});

media1400.addEventListener('change', () => {
  carouselHandler(carouselimages, media920, media1400);
});

// transactions number animation

const showOperationsNumb = () => {
  const realizedOperations = document.getElementById('realized-operations');
  const box = realizedOperations.getBoundingClientRect();
  if (box.top < window.innerHeight && box.bottom >= 0 && realizedOperations.dataset.animate === 'true') {
    animateValue(realizedOperations, 0, 1200, 5000);
    realizedOperations.dataset.animate = false;
  }
  const realizedMoney = document.getElementById('realized-money');
  const box2 = realizedMoney.getBoundingClientRect();
  if (box2.top < window.innerHeight && box2.bottom >= 0 && realizedMoney.dataset.animate === 'true') {
    animateValue(realizedMoney, 0, 2450, 5000);
    realizedMoney.dataset.animate = false;
  }
  if (realizedOperations.dataset.animate === 'false' && realizedMoney.dataset.animate === 'false') {
    window.removeEventListener('scroll', showOperationsNumb);
  }
};

showOperationsNumb();

window.addEventListener('scroll', showOperationsNumb);

// contact form handler
const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', contactFormHandler);
document.getElementById('not-phone').addEventListener('change', (e) => {
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  if (e.target.checked) {
    phoneInput.disabled = true;
    phoneInput.value = '';
    emailInput.required = true;
    emailInput.previousElementSibling.innerHTML = 'Correo:';
  } else {
    phoneInput.disabled = false;
    emailInput.required = false;
    emailInput.previousElementSibling.innerHTML = 'Correo (Opcional):';
  }
});
