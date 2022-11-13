import { getCard } from './element.js';
import { pageActive, pageDisabled} from './form.js';

const address = document.querySelector('#address');
const TOKYO_COORDINATES = {
  lat: 35.672855,
  lng: 139.817413,
};

let map;
try{
  map = L.map('map-canvas')
    .setView({
      lat: TOKYO_COORDINATES.lat,
      lng: TOKYO_COORDINATES.lng,
    }, 10);
}catch{
  pageDisabled();
}

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//layer for markers
const markerGroup = L.layerGroup().addTo(map);

//main marker
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: TOKYO_COORDINATES.lat,
    lng: TOKYO_COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

//similar other markers
const similarPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


//remove markers from the map
const removeMarkers = () => {
  markerGroup.clearLayers();
};

const SIMILAR_OBJECTS_COUNT = 10;

const putOnMap = (objects) => {
  markerGroup.clearLayers();
  objects
    .slice()
    .slice(0, SIMILAR_OBJECTS_COUNT)
    .forEach((element) =>{
      const lat = element.location.lat;
      const lng = element.location.lng;
      const marker = L.marker({
        lat,
        lng,
      },{
        icon: similarPinIcon,
      });

      marker
        .addTo(markerGroup)
        .bindPopup(getCard(element));
    });
};

const getCoordinates = function(element) {
  address.value = `${element.lat}, ${element.lng}`;
};

mainMarker.on('moveend', (evt) => {
  const mainMarkerCoordinates = evt.target.getLatLng();
  getCoordinates(mainMarkerCoordinates);
});

const loadMap = () => {
  map.on('load', pageActive());
  getCoordinates(TOKYO_COORDINATES);
};


export {loadMap};
export {putOnMap, removeMarkers};
