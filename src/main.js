var L = require('leaflet');
require('esri-leaflet');
var popupTemplate = require('./src/popup.js');
var map = L.map('map').setView([45.528, -122.680], 13);
L.esri.basemapLayer('Gray').addTo(map);
var parks = new L.esri.FeatureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Parks/FeatureServer/0', {
  style: function () {
    return { color: '#70ca49', weight: 2  };
  }
}).addTo(map);
parks.bindPopup(popupTemplate);
