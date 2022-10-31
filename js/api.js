import { showError, showSuccess } from './err.js';
import { resetForm } from './util.js';

const SIMILAR_OBJECTS_COUNT = 15;

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects.slice(0, SIMILAR_OBJECTS_COUNT));
    });
};

const sendData = (body) => {
  // eslint-disable-next-line no-console
  console.log('form is sent');
  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok){
        showSuccess();
        resetForm();
      } else {
        showError();
      }
    })
    .catch(() => {
      showError();
    });
};

export {getData, sendData};
