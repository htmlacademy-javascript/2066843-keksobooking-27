import { getData } from './api.js';
import { putOnMap, loadMap, removeMarkers} from './map.js';
import {pageDisabled, setUserFormSubmit} from './form.js';
import { resetForm } from './util.js';
import { showError, showSuccess} from './err.js';

pageDisabled();
loadMap();
getData(putOnMap);

const mapFilter = document.querySelectorAll('.map__filter, .map__checkbox');

mapFilter.forEach((element) => {
  element.addEventListener('change', () => {
    removeMarkers();
    getData(putOnMap);
  });
}) ;

setUserFormSubmit(resetForm, showSuccess, showError);
