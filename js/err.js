//error message
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const newErrorMessage = errorTemplate.cloneNode(true);
document.body.appendChild(newErrorMessage);
newErrorMessage.classList.add('hidden');
const showError = () => {
  newErrorMessage.classList.remove('hidden');
};
const hideError = () => {
  newErrorMessage.classList.add('hidden');
};

//success message
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const newSuccessMessage = successTemplate.cloneNode(true);
document.body.appendChild(newSuccessMessage);
newSuccessMessage.classList.add('hidden');
const showSuccess = () => {
  newSuccessMessage.classList.remove('hidden');
};
const hideSuccess = () => {
  newSuccessMessage.classList.add('hidden');
};

export {
  showError,
  hideError,
  showSuccess,
  hideSuccess,
};
