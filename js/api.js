const SIMILAR_OBJECTS_COUNT = 5;

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((objects) => {
      onSuccess(objects.slice(0, SIMILAR_OBJECTS_COUNT));
    });
};

// const sendData = (onSuccess, body) => {
//   fetch(
//     ' https://27.javascript.pages.academy/keksobooking ',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       },
//       body,
//     },
//   )
//     .then((respone) => {
//       if(respone.ok) {
//         onSuccess();
//       }
//     });
// };

export {getData};
