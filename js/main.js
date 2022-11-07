import { getData } from './api.js';
import { putOnMap, loadMap} from './map.js';
import {pageDisabled, setUserFormSubmit} from './form.js';
import { resetForm } from './util.js';
import { showError, showSuccess} from './err.js';
import { filterOffers, setChangeEventOnFilter } from './filter.js';

pageDisabled();
loadMap();
getData((element) => {
  putOnMap(element);
  setChangeEventOnFilter( () => {
    putOnMap(element.filter(filterOffers));
  });
});

// const mapFilter = document.querySelectorAll('.map__filter, .map__checkbox');

// mapFilter.forEach((element) => {
//   element.addEventListener('change', () => {
//     getData(putOnMap);
//   });
// }) ;

setUserFormSubmit(resetForm, showSuccess, showError);
