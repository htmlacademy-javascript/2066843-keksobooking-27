const LOW = 10000;
const HIGH = 50000;

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const sectionButtons = document.querySelectorAll('.map__filter');
const housingCheckbox = document.querySelectorAll('.map__checkbox');
const housingFeatures = Array.prototype.slice.call(housingCheckbox, 0);


const setAnyValue = (id) => {
  const field = document.querySelector(`#${id}`);
  field.value = 'any';
};


// type filter
const filterType = (ad) => {
  if(housingType.value === 'any'){
    return true;
  } else {
    return ad.offer.type === housingType.value;
  }
};

// price filter

const getPrice = (element) => {
  const price = element.offer.price;
  if(price < LOW){
    return 'low';
  }else if(price >= LOW && price < HIGH){
    return 'middle';
  }else if(price >= HIGH) {
    return 'high';
  }
};
const filterPrice = (ad) => {
  if(housingPrice.value === 'any') {
    return true;
  }
  return getPrice(ad) === housingPrice.value;};

//rooms filter
const filterRooms = (ad) => {
  if(housingRooms.value === 'any') {
    return true;
  }
  // eslint-disable-next-line eqeqeq
  return ad.offer.rooms == housingRooms.value;
};

// guests filter
const filterGuests = (ad) => {
  if(housingGuests.value === 'any') {
    return true;
  }
  // eslint-disable-next-line eqeqeq
  return ad.offer.guests == housingGuests.value;
};

// features filter
function isChecked(element) {
  return element.checked;
}
const filterFeatures = (ad) => {
  const checkedFeatures = housingFeatures.filter(isChecked).map((element) => element.value);

  if(checkedFeatures.length > 0 && ad.offer.features === undefined){
    return false;
  }

  return (checkedFeatures.every((element) => ad.offer.features.includes(element)));
};

// combine all filters
const filterOffers = (ad) =>
  filterType(ad) && filterPrice(ad) && filterRooms(ad) && filterGuests(ad) && filterFeatures(ad);

// eslint-disable-next-line no-shadow
const setChangeEventOnFilter = (putOnMap) => {
  sectionButtons.forEach((button) => {
    button.addEventListener('change', () => {
      putOnMap();
    });
  });
  housingFeatures.forEach((element) => element.addEventListener('click', () => {
    putOnMap();
  }));
};

export {filterOffers, setChangeEventOnFilter, setAnyValue};
