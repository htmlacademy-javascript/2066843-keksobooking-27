

const housingType = document.querySelector('#housing-type');
// const housingPrice = document.querySelector('#housing-price');
// const housingRooms = document.querySelector('#housing-rooms');
// const housingGuests = document.querySelector('#housing-guests');
// const housingFeatures = document.querySelectorAll('.map__checkbox');

// const getPrice = (element) => {
//   const price = element.offer.price;
//   if(price < 10000){
//     return 'low';
//   }else if(price >= 10000 && price < 50000){
//     return 'middle';
//   }else if(price >= 50000) {
//     return 'high';
//   }
// };

// // const validateCheck = (element) => {
// //   if(element.checked){
// //     return true;
// //   }else {
// //     return false;
// //   }
// // };

// // function checkFeature (array, item) {
// //   if(validateCheck(item)){
// //     // return array.some((element) => element === item);
// //     return array.some((element) => element === item);
// //   }
// // }

// function getObjectRank(object) {
//   let rank = 0;

//   //Type filter
//   if (object.offer.type === housingType.value) {
//     rank++;
//   }

//   //Price filter
//   const price = getPrice(object);
//   if(price === housingPrice.value){
//     rank++;
//   }

//   //Rooms filter

//   //не понимаю почему при === не работает фильтр , а с == работает
//   // eslint-disable-next-line eqeqeq
//   if(object.offer.rooms == housingRooms.value){
//     rank++;
//   }

//   //Guest filter

//   //не понимаю почему при === не работает фильтр , а с == работает
//   // eslint-disable-next-line eqeqeq
//   if(object.offer.guests == housingGuests.value){
//     rank++;
//   }

//   return rank;
// }

// const compareObjects = (objA, objB) => {
//   const rankA = getObjectRank(objA);
//   const rankB = getObjectRank(objB);

//   return rankB - rankA;
// };

// export {compareObjects};


const setAnyValue = (id) => {
  const field = document.querySelector(`#${id}`);
  field.value = 'any';
};

const resetFilters = () => {
  setAnyValue('housing-type');
  setAnyValue('housing-price');
  setAnyValue('housing-rooms');
  setAnyValue('housing-guests');
  const checkBoxes = document.querySelectorAll('map__features input');
  checkBoxes.forEach((element) => {
    element.checked = false;
  });
};

const filterType = (ad) => {
  if(housingType.value === 'any'){
    return true;
  } else {
    return ad.offer.type === housingType.value;
  }
};

const filterOffers = (ad) => filterType(ad);

// eslint-disable-next-line no-shadow
const setChangeEventOnFilter = (putOnMap) => {
  housingType.addEventListener('change', () => {
    putOnMap();
  });
};

export {resetFilters, filterOffers, setChangeEventOnFilter};
