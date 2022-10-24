import { getData } from './api.js';
import './element.js';
import {pageDisabled, setUserFormSubmit} from './form.js';
import './map.js';
import { loadMap, putOnMap } from './map.js';
import { resetForm } from './util.js';

pageDisabled();
loadMap();

getData(putOnMap);
setUserFormSubmit(resetForm);
