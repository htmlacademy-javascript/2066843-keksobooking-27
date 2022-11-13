import { setAnyValue } from './filter.js';

const slider = document.querySelector('.ad-form__slider');

const resetForm = () => {
  const form = document.querySelector('.ad-form');
  form.reset();
  const photoContainer = document.querySelector('.ad-form__photo');
  photoContainer.innerHTML = '';
  const photoAvatar = document.querySelector('.ad-form-header__preview--avatar');
  photoAvatar.src = 'img/muffin-grey.svg';
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

const resetSlider = () => {
  slider.noUiSlider.reset();
};

const reset = () => {
  const resetButton = document.querySelector('.ad-form__reset');
  resetButton.addEventListener('click', () => {
    resetFilters();
    resetForm();
    resetSlider();
  });
};

export {resetForm, resetFilters, reset};
