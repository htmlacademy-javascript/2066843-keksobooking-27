import { showError, showSuccess } from './err.js';
import { resetForm } from './util.js';

const SIMILAR_OBJECTS_COUNT = 12;
const GET_DATA_ADDRESS = 'https://27.javascript.pages.academy/keksobooking/data';
const SEND_DATA_ADDRESS = 'https://27.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(GET_DATA_ADDRESS)
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects.slice(0, SIMILAR_OBJECTS_COUNT));
    });
};

const sendData = (body) => {
  fetch(
    SEND_DATA_ADDRESS,
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
