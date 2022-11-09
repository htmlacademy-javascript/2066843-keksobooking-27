

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelectorAll('.map__checkbox');


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
  if(price < 10000){
    return 'low';
  }else if(price >= 10000 && price < 50000){
    return 'middle';
  }else if(price >= 50000) {
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

//features filter
const filterFeatures = (ad) => {
  const checkedFeatures = [];
  housingFeatures.forEach((element) => {
    if(element.checked){
      checkedFeatures.push(element.value);
    }
  });
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
  housingType.addEventListener('change', () => {
    putOnMap();
  });
  housingPrice.addEventListener('change', () => {
    putOnMap();
  });
  housingRooms.addEventListener('change', () => {
    putOnMap();
  });
  housingGuests.addEventListener('change', () => {
    putOnMap();
  });
  housingFeatures.forEach((element) => element.addEventListener('click', () => {
    putOnMap();
  }));
};

export {resetFilters, filterOffers, setChangeEventOnFilter};
