const regExpName = /[^а-яА-Яa-zA-Z]+/g;
const regExpPhone = /[^+\d]+/g;

export {
  regExpName,
  regExpPhone
};

const replace = () => {
  const nameFields = document.getElementsByName('fio');
  const phoneFields = document.getElementsByName('phone');

  const replaceInvalidName = (name) => {
    return name.replace(regExpName, '');
  };

  const replaceInvalidPhone = (phone) => {
    return phone.replace(regExpPhone, '');
  };

  nameFields.forEach(field => {
    field.addEventListener('input', (e) => {
      e.target.value = replaceInvalidName(e.target.value);
    });
  });

  phoneFields.forEach(field => {
    field.addEventListener('input', (e) => {
      e.target.value = replaceInvalidPhone(e.target.value);
    });
  });
};
 
export default replace;
