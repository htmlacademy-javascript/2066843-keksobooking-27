const form = document.querySelector('.ad-form');
// const mapFilters = document.querySelector('.map__filters');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
// const timeIn = document.querySelector('#timein');
// const timeOut = document.querySelector('#timeout');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');


const turnOffOn = function() {
  const notice = document.querySelector('.notice');
  form.classList.toggle('.ad-form--disabled');
  const elements = notice.querySelectorAll('.ad-form__element');
  elements.forEach((element) => {
    element.classList.toggle('ad-form--disabled');
  });
  const filterContainer = document.querySelector('.map__filters-container');
  const filterItems = filterContainer.querySelectorAll('.map__filter');
  filterItems.forEach((element) => {
    element.classList.toggle('map__filters--disabled');
  });
};

export {turnOffOn};

//Validation

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element'
});

//Validate guests
const roomsGuests = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const validateGuests = () => roomsGuests[roomNumber.value].includes(capacity.value);

const getGuestsErrorMessage = () => {
  switch (roomNumber.value) {
    case '1':
      return 'Not more than 1 guest';
    case '2':
      return 'Not more than 2 guest';
    case '3':
      return 'Not more than 3 guest';
    case '100':
      return 'There is no options';
  }
};

//Validate price
const priceByType = {
  'palace': 10000,
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

const validatePrice = () => priceByType[type.value] <= price.value && price.value < 100000;

const getPriceErrorMessage = () => `Minimal price for ${type.value} is ${priceByType[type.value]}`;

pristine.addValidator(price, validatePrice, getPriceErrorMessage);
pristine.addValidator(capacity, validateGuests, getGuestsErrorMessage);

form.addEventListener('submit', (evt) => {
  if(!pristine.validate()){
    evt.preventDefault();
  }
});
