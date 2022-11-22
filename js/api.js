import { getDataError, showError, showSuccess } from './error.js';
import { resetForm } from './reset.js';

const GET_DATA_ADDRESS = 'https://27.javascript.pages.academy/keksobooking/data';
const SEND_DATA_ADDRESS = 'https://27.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(GET_DATA_ADDRESS)
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects);
    })
    .catch(() => {
      getDataError();
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
