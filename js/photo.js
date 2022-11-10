const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview--avatar');

const addAvatar = () => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    avatarPreview.src = URL.createObjectURL(file);
  });
};

const photoChooser = document.querySelector('.ad-form__input');
const photoContainer = document.querySelector('.ad-form__photo');
const addPhoto = () => {
  photoChooser.addEventListener('change', () => {
    const photo = document.createElement('img');
    photo.classList.add('ad-form__photo--image');
    const file = photoChooser.files[0];
    photo.src = URL.createObjectURL(file);
    photo.alt = 'Фотография жилья';
    photo.setAttribute('width', '70');
    photo.setAttribute('height', '70');
    photoContainer.appendChild(photo);
  });
};
export {addAvatar, addPhoto};
