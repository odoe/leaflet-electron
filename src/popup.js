var L = require('leaflet');
var popupTemplate = '<h3>{NAME}</h3>{ACRES} Acres<br><small>Property ID: {PROPERTYID}<small>';
module.exports = function(feature){
    return L.Util.template(popupTemplate, feature.properties);
};
