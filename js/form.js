import { sendData } from './api.js';
const MIN = 0;
const MAX = 100000;

const PriceByType = {
  'palace': 10000,
  'flat': 1000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

const roomsGuests = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const address = form.querySelector('#address');
const formChildren = form.children;
const mapFiltersChildren = mapFilters.children;

const slider = form.querySelector('.ad-form__slider');

//disable form
const pageDisabled = () => {
  form.classList.add('ad-form--disabled');
  for (const child of formChildren) {
    child.setAttribute('disabled', 'disabled');
  }

  mapFilters.classList.add('.map__filters--disabled');
  for (const child of mapFiltersChildren) {
    child.setAttribute('disabled', 'disabled');
  }
};

//activate form
const pageActive = () => {
  form.classList.remove('ad-form--disabled');
  for (const child of formChildren) {
    child.removeAttribute('disabled', 'disabled');
  }

  mapFilters.classList.remove('.map__filters--disabled');
  for (const child of mapFiltersChildren) {
    child.removeAttribute('disabled', 'disabled');
  }
};

//Validation
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element'
});


//Validate guests
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


//Validate price and slider
const validatePrice = () => PriceByType[type.value] <= price.value && price.value < 100000;

const getPriceErrorMessage = () => `Minimal price for ${type.value} is ${PriceByType[type.value]}`;

//slider
noUiSlider.create(slider, {
  range: {
    min: MIN,
    max: MAX,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', () => {
  price.value = slider.noUiSlider.get();
});

const changeMinPrice = () => {
  price.min = PriceByType[type.value];
  price.placeholder = PriceByType[type.value];
  slider.noUiSlider.updateOptions({
    range: {
      min: PriceByType[type.value],
      max: MAX
    },
  });
};
type.addEventListener('change', changeMinPrice);
price.addEventListener('change', () => {
  slider.noUiSlider.set(price.value);
});


//Validate checkIn checkOut
timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

pristine.addValidator(price, validatePrice, getPriceErrorMessage);
pristine.addValidator(capacity, validateGuests, getGuestsErrorMessage);


//send form
const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if(isValid){
      sendData(
        new FormData (evt.target),
      );
    }
  });
};


address.setAttribute('readonly', 'readonly');

export {
  pageDisabled,
  pageActive,
  setUserFormSubmit,
};
