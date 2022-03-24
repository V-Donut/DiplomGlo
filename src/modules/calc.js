import { animate } from './helpers';

const calc = () => {
  const calc = document.getElementById('calc');
  const calcType = document.getElementById('calc-type');
  const calcMaterial = document.getElementById('calc-type-material');
  const calcInput = document.getElementById('calc-input');
  const calcTotal = document.getElementById('calc-total');
  let lastResult = 0;

  const countCalc = () => {
    const calcTypeValue = (calcType.value !== '--' ) ? calcType.value : 0;
    const calcMaterialValue = (calcMaterial.value !== '--') ? calcMaterial.value : 0;

    let calcInputValue = calcInput.value;
    let totalValue = 0;

    if (!calcTypeValue || !calcMaterialValue) {
      calcTotal.value = '';
      return;
    }

    if (calcInput.value === '') {
      calcInputValue = 0;
    }

    totalValue = calcInputValue * calcTypeValue * calcMaterialValue;
    
    let start = lastResult;
    lastResult = totalValue;

    const drawUp = (progress) => {
      if ((progress * totalValue) > start) {
        calcTotal.value = Math.trunc(progress * totalValue);
      }
    };

    const drawDown = (progress) => {
      let value = Math.trunc((1 - progress) * start);

      if (value > totalValue) {
        calcTotal.value = value;
      } else {
        calcTotal.value = Math.trunc(totalValue);
      }
    };

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw: (totalValue > start) ? drawUp : drawDown
    });
  };

  calc.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcMaterial || e.target === calcInput) {
      countCalc();
    }
  });

  calcInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });
};

export default calc;
