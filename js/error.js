import {onErrorMessageEscKeydown, onSuccessMessageEscKeydown} from './util.js';
//error message
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const getDataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const newErrorMessage = errorTemplate.cloneNode(true);
document.body.appendChild(newErrorMessage);
newErrorMessage.classList.add('hidden');

const dataError = getDataErrorTemplate.cloneNode(true);
document.body.appendChild(dataError);
dataError.classList.add('hidden');


const hideError = () => {
  newErrorMessage.classList.add('hidden');
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

const showError = () => {
  newErrorMessage.classList.remove('hidden');

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', hideError);

  document.addEventListener('keydown', onErrorMessageEscKeydown);

  newErrorMessage.addEventListener('click', hideError);
};

const getDataError = () => {

  dataError.classList.remove('hidden');

  const errorButton = document.querySelector('.data-error__button');
  errorButton.addEventListener('click', hideError);

  document.addEventListener('keydown', onErrorMessageEscKeydown);

  newErrorMessage.addEventListener('click', hideError);
};

//success message
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const newSuccessMessage = successTemplate.cloneNode(true);
document.body.appendChild(newSuccessMessage);
newSuccessMessage.classList.add('hidden');

const hideSuccess = () => {
  newSuccessMessage.classList.add('hidden');

  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
};

const showSuccess = () => {
  newSuccessMessage.classList.remove('hidden');

  document.addEventListener('keydown', onSuccessMessageEscKeydown);

  newSuccessMessage.addEventListener('click', hideSuccess);
};


export {
  showError,
  hideError,
  showSuccess,
  hideSuccess,
  getDataError,
};
