const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
// const housingFeatures = document.querySelector('#housing-features');

const getPrice = (element) => {
  const price = element.offer.price;
  if(price < 10000){
    return 'low';
  }else if(price >= 10000 && price < 50000){
    return 'middle';
  }else if(price >= 50000) {
    return 'high';
  }
};

const validateCheck = (element) => {
  if(element.checked){
    return true;
  }else {
    return false;
  }
};

function checkFeature (array, item) {
  if(validateCheck(item)){
    // eslint-disable-next-line no-console
    // console.log(item);
    // // eslint-disable-next-line no-console
    // console.log(array.some(item));
    return array.some((element) => element === item);
  }
}

function getObjectRank(object) {
  let rank = 0;

  //Type filter
  if (object.offer.type === housingType.value) {
    rank++;
  }

  //Price filter
  const price = getPrice(object);
  if(price === housingPrice.value){
    rank++;
  }

  //Rooms filter

  //не понимаю почему при === не работает фильтр , а с == работает
  // eslint-disable-next-line eqeqeq
  if(object.offer.rooms == housingRooms.value){
    rank++;
  }

  //Guest filter

  //не понимаю почему при === не работает фильтр , а с == работает
  // eslint-disable-next-line eqeqeq
  if(object.offer.guests == housingGuests.value){
    rank++;
  }

  //checkbox filter
  const checkBoxes = document.querySelectorAll('.map__checkbox');
  checkBoxes.forEach((element) => {
    if(checkFeature(object.offer.features, element.value)){
      rank++;
    }
  });

  return rank;
}


const compareObjects = (objA, objB) => {
  const rankA = getObjectRank(objA);
  const rankB = getObjectRank(objB);

  return rankB - rankA;
};
export {compareObjects};
