// Map Feature w mapMarker on SVG from LAT. and LONG.
// Remote https://github.com/achord/svg-usa-map.git
// gps-coordinates.net
// t: 49.3931, r: -66.95, b: 24.545874, l: -124.75
// Bounding Box must be exact in accordance with SVG in use. Also keep in mind the projection of the map. E.g. Mercator(Google maps)
var USA = {t: 51.8, r: -66.95, b: 24.639528, l: -124.75};

function setMarkers(){
  var marker = document.querySelectorAll('.icon-marker');
  marker.forEach(function (el) {
      //return el.style.backgroundColor = 'lime';
      setMarker(el, el.dataset.lat, el.dataset.lng);
  });

}
function setMarker(el, lat, long){
  // Size in px of height and width
  // TODO Convert to %
  var moduleWidth = document.getElementById('map-container').offsetWidth; // get width from css or from calculated
  var moduleHeight = document.getElementById('map-container').offsetHeight;
  //console.log("m height, m width: " + moduleHeight, moduleWidth);

  // Coordinate Bounding Box for LA
  var top    =  USA.t;
  var right  =  USA.r;
  var bottom =  USA.b;
  var left   =  USA.l;

  // Coordinate difference  
  var width  = (right - left);
  var height = (top - bottom) ;
  //console.log("height, width: " + height, width);
  
  var latPx = (top - lat);
  var longPx = -(left - long);
  //console.log("latPx, longPx: " + latPx, longPx);

  var markerTop = Math.round ( (latPx / height) * moduleHeight ) -1 ; // -31 offset top by marker height
  var markerLeft = Math.round( (longPx / width) * moduleWidth ) -1  ; // -17 offset left by marker width

  console.log(markerTop, markerLeft);

  //Set pos within div
  el.style.top  = markerTop + "px";
  el.style.left = markerLeft + "px";

 }


 window.onload = function () {
       // set markers for map graphic
      setMarkers();
    };