import { getData } from './api.js';
import { putOnMap, loadMap} from './map.js';
import {pageDisabled, setUserFormSubmit} from './form.js';
import { debounce, resetForm} from './util.js';
import { showError, showSuccess} from './err.js';
import { filterOffers, setChangeEventOnFilter } from './filter.js';

pageDisabled();
loadMap();

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
