import './style.scss';
import mobileDesktopSwap from './navbar.js';
import { exhangeCalc, displayRates, carouselHandler } from './utils.js';

// dummy data
const exchangeRates = {
  penBs: '123',
  usdPen: '12',
  usdBs: '12345',
  date: '27/02/2022',
};
const carouselimages = [
  { path: './placeholder-2.png', alt: 'Slide 1' },
  { path: './placeholder-2.png', alt: 'Slide 2' },
  { path: './placeholder-2.png', alt: 'Slide 3' },
];

// mobile manu handler
const mobileDesktopQuery = window.matchMedia('(min-width: 992px)');

mobileDesktopQuery.addEventListener('change', mobileDesktopSwap);
mobileDesktopSwap(mobileDesktopQuery);

// display daily exchange rates
document.getElementById('current-date').innerHTML = exchangeRates.date;
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

// banks carousel
const media920 = window.matchMedia('(min-width: 920px)');
const media1400 = window.matchMedia('(min-width: 1400px)');

carouselHandler(carouselimages, media920, media1400);

media920.addEventListener('change', () => {
  carouselHandler(carouselimages, media920, media1400);
});

media1400.addEventListener('change', () => {
  carouselHandler(carouselimages, media920, media1400);
});
