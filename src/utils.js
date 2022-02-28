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

export { exhangeCalc, displayRates };