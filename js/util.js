function getRandomPositiveNumber() {
  let number = Math.floor(Math.random() * 100);
  while (number < 0){
    number = Math.floor(Math.random());
  }
  return number;
}

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

function getRamdomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const getRandomShuffledArray = function(array) {
  const index = getRandomPositiveInteger(0, array.length);
  array = shuffle(array);
  const shuffled = array.slice(0, index);
  return shuffled;
};

const hideElement = function(key, object, elelement) {
  const result = key in object;
  if(result){
    elelement.classList.add('hidden');
  }
};

const resetForm = function(form) {
  form.reset();
};

const blockSubmitButton = () => {
  const submitButton = document.querySelector('.ad-form__submit');
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  const submitButton = document.querySelector('.ad-form__submit');
  submitButton.disabled = false;
};


export {hideElement,
  getRamdomArrayElement,
  getRandomPositiveFloat,
  getRandomPositiveInteger,
  getRandomPositiveNumber,
  getRandomShuffledArray,
  resetForm,
  unblockSubmitButton,
  blockSubmitButton,
};
