import modal from './modules/modal';
import calc from './modules/calc';
import timer from './modules/timer';
import slider from './modules/slider';
import replace from './modules/replace';
import sendForm from './modules/sendForm';
import smoothScroll from './modules/smoothScroll';

modal();
calc();
timer('16 april 2022');
slider();
smoothScroll();
replace();
sendForm({ 
  formId: 'form1', 
  someElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ] 
});
sendForm({ 
  formId: 'form2', 
  someElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ] 
});
sendForm({ 
  formId: 'form3', 
  someElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ] 
});
sendForm({ 
  formId: 'form4', 
  someElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ] 
});
