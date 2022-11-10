import { getData } from './api.js';
import { putOnMap, loadMap} from './map.js';
import {pageDisabled, setUserFormSubmit} from './form.js';
import { debounce} from './util.js';
import { resetForm, reset} from './reset.js';
import { showError, showSuccess} from './err.js';
import { filterOffers, setChangeEventOnFilter } from './filter.js';
import { addAvatar, addPhoto } from './photo.js';


pageDisabled();
loadMap();

addAvatar();
addPhoto();
reset();

getData((element) => {
  putOnMap(element);
  setChangeEventOnFilter(
    debounce(() => {
      putOnMap(element.filter(filterOffers));
    })
  );
},
);

setUserFormSubmit(resetForm, showSuccess, showError);
