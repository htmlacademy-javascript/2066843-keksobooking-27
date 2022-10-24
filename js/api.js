const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects);
    });
};

const sendData = (onSuccess, body) => {
  fetch(
    ' https://27.javascript.pages.academy/keksobooking ',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body,
    },
  )
    .then((respone) => {
      if(respone.ok) {
        onSuccess();
      }
    });
};

export {getData, sendData};
