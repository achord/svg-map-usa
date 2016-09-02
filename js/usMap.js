// Map Feature w mapMarker on SVG from LAT. and LONG.
// Remote https://github.com/achord/svg-usa-map.git
// Resources : gps-coordinates.net
// t: 49.3931, r: -66.95, b: 24.545874, l: -124.75

// Bounding Box must be exact in accordance with SVG in use. Also keep in mind the projection of the map. E.g. Mercator(Google maps)
var usa = {
  t: 50.2,
  r: -66.95,
  b: 24.7,
  l: -124.75
};


function setMarkers(){
  var marker = document.querySelectorAll('.icon-marker');
  marker.forEach(function (el) {
    setMarker(el, el.dataset.lat, el.dataset.lng);
  });

}
function setMarker(el, lat, long){  

  // Size in px of height and width // TODO Convert to %
  var moduleWidth = document.getElementById('map-container').offsetWidth; // get width from css or from calculated
  var moduleHeight = document.getElementById('map-container').offsetHeight;

  // Coordinate Bounding Box for USA
  var top    =  usa.t;
  var right  =  usa.r;
  var bottom =  usa.b;
  var left   =  usa.l;

  // Offset marker for centering
  var markerHeight = el.offsetHeight;
  var markerWidth = el.offsetWidth;

  // Coordinate difference  
  var width  = (right - left);
  var height = (top - bottom) ;
  var latPx = (top - lat);
  var longPx = -(left - long);
  console.log("height dif: "+top, bottom, height);

  //var markerTop = Math.round ( (latPx / height) * moduleHeight ) - ( markerHeight / 2); // offset to center marker
  //var markerLeft = Math.round( (longPx / width) * moduleWidth )  - ( markerWidth / 2);  // offset to center marker
  var markerTop = ( (latPx / height) * moduleHeight ) - ( markerHeight / 2); // offset to center marker
  var markerLeft = ( (longPx / width) * moduleWidth )  - ( markerWidth / 2);  // offset to center marker

  //Set pos within div
  el.style.top  = markerTop + "px";
  el.style.left = markerLeft + "px";

}

window.onload = function () {
 // set markers for map graphic
 setMarkers();
};