import { createObjects } from './data.js';
import './element.js';
import {pageDisabled} from './form.js';
import './map.js';
import { loadMap, putOnMap } from './map.js';

pageDisabled();
loadMap();

fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((objects) => {
    const a = objects;
    putOnMap(a);
  });
const one = createObjects(1);
putOnMap(one);
