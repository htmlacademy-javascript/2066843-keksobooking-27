import {createObjects} from './data.js';
import { hideElement } from './util.js';

const objects = createObjects(10);

const mapBlock = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card').content.querySelector('.popup');

objects.forEach((element) => {
  const apartmentElement = templateFragment.cloneNode(true);
  apartmentElement.querySelector('.popup__title').textContent = element.offer.title;
  apartmentElement.querySelector('.popup__text--address').textContent = element.offer.address;
  apartmentElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  apartmentElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  apartmentElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  apartmentElement.querySelector('.popup__features').textContent = element.offer.features;
  apartmentElement.querySelector('.popup__description').textContent = element.offer.description;
  apartmentElement.querySelector('.popup__avatar').src = element.author;
  const oldPhoto = apartmentElement.querySelector('.popup__photo');
  element.offer.photos.forEach((photo) => {
    const photoContainer = apartmentElement.querySelector('.popup__photos');
    const photoElement = apartmentElement.querySelector('.popup__photo').cloneNode(true);
    photoElement.src = photo;
    photoContainer.appendChild(photoElement);
  }
  );
  oldPhoto.remove();
  hideElement(element.offer.photos, apartmentElement.querySelector('.popup__photos'));
  hideElement(element.offer.features, apartmentElement.querySelector('.popup__features'));
  mapBlock.appendChild(apartmentElement);
});

