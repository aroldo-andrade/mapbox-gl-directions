'use strict';
var mapboxgl = require('mapbox-gl');
var insertCss = require('insert-css');
var fs = require('fs');
mapboxgl.accessToken = window.localStorage.getItem('MapboxAccessToken');

// var directionsDiv = document.body.appendChild(document.createElement('div'));
// directionsDiv.id = 'directions';

insertCss(fs.readFileSync('./src/mapbox-gl-directions.css', 'utf8'));
insertCss(fs.readFileSync('./node_modules/mapbox-gl/dist/mapbox-gl.css', 'utf8'));
var mapDiv = document.body.appendChild(document.createElement('div'));
mapDiv.style = 'position:absolute;top:0;right:0;left:0;bottom:0;';

var map = window.map = new mapboxgl.Map({
  hash: true,
  container: mapDiv,
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-79.4512, 43.6568],
  zoom: 13
});

// remove control
var button = document.body.appendChild(document.createElement('button'));
button.style = 'z-index:10;position:absolute;top:10px;right:10px;';
button.textContent = 'Remove directions control';

var removeWaypointsButton = document.body.appendChild(document.createElement('button'));
removeWaypointsButton.style = 'z-index:10;position:absolute;top:30px;right:10px;';
removeWaypointsButton.textContent = 'Remove all waypoints';

var addListenerButton = document.body.appendChild(document.createElement('button'));
addListenerButton.style = 'z-index:10;position:absolute;top:50px;right:10px;';
addListenerButton.textContent = 'Add Listener';
var removeListenerButton = document.body.appendChild(document.createElement('button'));
removeListenerButton.style = 'z-index:10;position:absolute;top:70px;right:10px;';
removeListenerButton.textContent = 'Remove Listener';

// directions
// var MapboxDirections = require('../src/index');
import MapboxDirections from '../src/index'

var directions = new MapboxDirections({
  accessToken: window.localStorage.getItem('MapboxAccessToken'),
  unit: 'metric',
  profile: 'mapbox/cycling',
});
window.directions = directions;

map.addControl(directions, 'top-left');

function route(event){
  console.log(event)
}

map.on('load', () => {
  button.addEventListener('click', function() {
    map.removeControl(directions);
  });

  removeWaypointsButton.addEventListener('click', function() {
    directions.removeRoutes();
  });

  addListenerButton.addEventListener('click', function() {
    directions.on('route', route)
  });

  removeListenerButton.addEventListener('click', function() {
    directions.off('route');
  });
});
