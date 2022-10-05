function getRandomPositiveNumber() {
  let number = Math.floor(Math.random() * 100);
  while (number < 0){
    number = Math.floor(Math.random());
  }
  return number;
}

console.log(getRandomPositiveNumber());

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

  return +result.toFixed(digits);
}


//  location
let lat = getRandomPositiveFloat(35.65, 35.7, 5);
let lng = getRandomPositiveFloat(139.7, 139.8, 5);

const createLocation = () => {
return lat + ", " + lng;
}

// Author


const createAuthor = () => {
return;
}
// Offer
const TITLE = [
  'Executive apartment & free parking',
  'Cheap and bestview',
  'Self check-in and late checkout',
  'Free biketour and breakfast includes',
  'Close to market and near the bus station',
  '5 min walking from city center',
  'Pet friendly',
  'WIth BBQ and pool',
  'Family friendly with Garage PArking',
  'Hidden Gem with history',
];

// const ADDRESS = Array.from({length: 10}, createLocation);

// const PRICE = Array.from({length: 10}, getRandomPositiveNumber)


const ADDRESS = createLocation();

const PRICE = getRandomPositiveNumber();

console.log(ADDRESS);

const createOffer = () => {
  return;
}




const obj = Array.from({length: 10}, createAuthor, createOffer, createLocation);

