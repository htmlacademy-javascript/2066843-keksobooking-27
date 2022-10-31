import { getData } from './api.js';
import './element.js';
import {pageDisabled} from './form.js';
import { putOnMap, loadMap} from './map.js';
import {setUserFormSubmit} from './form.js';
import { resetForm } from './util.js';
import { showError, showSuccess } from './err.js';


pageDisabled();
loadMap();

getData(putOnMap);
setUserFormSubmit(resetForm, showSuccess, showError);

