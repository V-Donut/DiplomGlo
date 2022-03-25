import { regExpName, regExpPhone } from './replace.js';
import { unBlockBody } from './helpers';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const requestModal = document.querySelector('.header-modal');
  const serviceModal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');

  const statusBlock = document.createElement('div');
  statusBlock.style.cssText = 'color: #00902a; line-height: 1; text-align: center; padding-top: 10px';
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с Вами свяжется!';

  const closeModals = () => {
    requestModal.style.display = 'none';
    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
    unBlockBody();
  };

  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      const attribute = input.getAttribute('name');
      const value = input.value.trim();

      if (attribute === 'fio' && (value.match(regExpName) !== null || value.length < 2)) {
        success = false;
      } else if (
        attribute === 'phone' && 
        (value.match(regExpPhone) !== null || value.length < 6 || value.replace('+', '').length > 16)
      ) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);
      const forbiddenValues = ['', '0'];

      if (element && elem.type === 'block' && forbiddenValues.indexOf(element.textContent) === -1) {
        formBody[elem.id] = element.textContent;
      } else if (element && elem.type === 'input' && forbiddenValues.indexOf(element.value) === -1) {
        formBody[elem.id] = element.value;        
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;

          formElements.forEach(input => {
            if (input.getAttribute('type') !== 'hidden') {
              input.value = '';
            }
          });

          setTimeout(() => {
            statusBlock.textContent = '';
            closeModals();
          }, 3000);
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = '';
      alert('Данные не валидны!');
    } 
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
