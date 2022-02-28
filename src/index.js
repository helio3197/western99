import './style.scss';
import mobileDesktopSwap from './navbar.js';
import { exhangeCalc, displayRates } from './utils.js';

// dummy rates
const exchangeRates = {
  penBs: '123',
  usdPen: '12',
  usdBs: '12345',
  date: '27/02/2022',
};

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
  outputCalc.value = '';
});