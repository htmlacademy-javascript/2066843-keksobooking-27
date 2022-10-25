import {getRamdomArrayElement} from './util.js';
import {getRandomPositiveFloat} from './util.js';
import {getRandomPositiveInteger} from './util.js';
import {getRandomPositiveNumber} from './util.js';
import {getRandomShuffledArray} from './util.js';

// Offer
const TITLES = [
  'Executive apartment & free parking',
  'Cheap and bestview',
  'Self check-in and late checkout',
  'Free biketour and breakfast includes',
  'Close to market and near the bus station',
  '5 min walking from city center',
  'Pet friendly',
  'With BBQ and pool',
  'Family friendly with Garage Parking',
  'Hidden Gem with history',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps, then head back for a morning coffee at this urban-chic studio with a suspended loft bedroom.',
  'Retreat to the deck of this sustainable getaway and gaze at the twinkling constellations under a cosy tartan blanket. AirShip 2 is an iconic, insulated aluminium pod designed by Roderick James with views of the Sound of Mull from dragonfly windows. Airship002 is comfortable, quirky and cool. It does not pretend to be a five-star hotel. The reviews tell the story.',
  'Enjoy the elegance of a by-gone era while staying in this Art Deco home. Beautifully decorated and featuring a sweeping staircase, original stained-glass windows, period furniture, and a stunningly unique black-and-white tiled bathroom.',
  'Unwind at this stunning French Provencal beachside cottage. The house was lovingly built with stone floors, high-beamed ceilings, and antique details for a luxurious yet charming feel. Enjoy the sea and mountain views from the pool and lush garden. The house is located in the enclave of Llandudno Beach, a locals-only spot with unspoilt, fine white sand and curling surfing waves. Although shops and restaurants are only a five-minute drive away, the area feels peaceful and secluded.',
  'Enjoy your stay at our bright one-bedroom loft! Our loft is centrally located to many restaurants, shopping, and nightlife. Wonderful location to spend time with family, friends, or business. Amenities include Free Parking, High-Speed WiFi, Fully equipped kitchen- Washer and dryer.',
  'Come stay at our private, quiet and simple home is located in the heart downtown. This spacious duplex is perfect for a group of traveling friends or a family looking for a peaceful stay. It includes 2 beds, living room (sofa bed), 1 bath, and 1 full-size family kitchen. There is plenty to do within walking distance including bars and restaurants or relax at home and watch Netflix or Hulu on the Smart TV.',
  'My modern 2-bedroom house has everything you need for your trip. It is 5 minutes away from the international airport. The unit comes 2 bedroom/2 bathroom and a sofa bed. Including Netflix, self check-in, and plenty of parking. Our Airbnb is within driving distance to several popular restaurants, cafes, and beaches. An ideal base to explore the city!',
  'Spitalfields and Shoreditch is the center of London culture, both historical and avant-garde. This is a once-in-a-lifetime chance to live in a beautifully conserved Georgian house built by the Huguenots circa 1725 in the heart of it all.',
  'The Sanctuary is a place for you to retreat, relax, reset and revive yourself. It is a mini-retreat especially designed for You to come alone, or with a friend or partner to renew your love of life. Sit and gaze at the stunning view, take some time for you! Don t want to go out? There is everything you need, Nespresso coffee, tea, breakfast supplies, treats, even dinners for you to heat. Create, with a range of art and craft activities, or just sit, drink, chat and relax. Your time!',
  'This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace',
  'A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function createOffer() {
  return {
    title: getRamdomArrayElement(TITLES),
    address : '',
    price: getRandomPositiveNumber(),
    type: getRamdomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(2, 16),
    checkin: getRamdomArrayElement(CHECKINS),
    checkout: getRamdomArrayElement(CHECKOUTS),
    features: getRandomShuffledArray(FEATURES),
    description: getRamdomArrayElement(DESCRIPTIONS),
    photos: getRandomShuffledArray(PHOTOS)
  };
}

// //Location
// function createLocation() {
//   const lat = getRandomPositiveFloat(35.65, 35.7, 5);
//   const lng = getRandomPositiveFloat(139.7, 139.8, 5);
//   return `lat:${lat}, lng:${lng}`;
// }

// Object
function createObj(index) {
  const aut = `img/avatars/user${index.toString().padStart(2, '0')}.png`;
  const locLat = getRandomPositiveFloat(35.65, 35.7, 5);
  const locLng = getRandomPositiveFloat(139.7, 139.8, 5);
  const off = createOffer();

  off.address = `${locLat}, ${locLng}`;

  return {
    author: aut,
    offer: off,
    location: {
      lat: locLat,
      lng: locLng
    },
  };
}

const createObjects = (count) => Array.from({length: count}, (_element, index) => createObj(index + 1));

export {createObjects};
