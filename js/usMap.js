// Map Feature w mapMarker on SVG from LAT. and LONG.

// Remote https://github.com/achord/svg-state-map.git
// gps-coordinates.net t 49.3931
// Bounding Box must be exact in accordance with SVG in use. Also keep in mind the projection of the map. E.g. Mercator(Google maps)
var USA = {t: 50, r: -66.95, b: 24.545874, l: -124.75}

function setMarker(lat, long){

  // Size in px of height and width
  // TODO Convert to %
  var moduleWidth = document.getElementById('map-container').offsetWidth; // get width from css or from calculated
  var moduleHeight = document.getElementById('map-container').offsetHeight;
  console.log("m height, m width: " + moduleHeight, moduleWidth);

  // Coordinate Bounding Box for LA
  var top    =  USA.t;
  var right  =  USA.r;
  var bottom =  USA.b;
  var left   =  USA.l;

  //Coordinate difference  
  var width  = (right - left);
  var height = (top - bottom);
  console.log("height, width: " + height, width);
  

  var latPx = (top - lat);
  var longPx = -(left - long);
  console.log("latPx, longPx: " + latPx, longPx);

  var markerTop = Math.round ( (latPx / height) * moduleHeight ) -3 ; // -31 offset top by marker height
  var markerLeft = Math.round( (longPx / width) * moduleWidth ) -3  ; // -17 offset left by marker width

  
  //console.log(markerTop, markerLeft); //640 477

  document.getElementById("marker").style.top  = markerTop + "px";
  document.getElementById("marker").style.left = markerLeft + "px";


 }


 window.onload = function () {
       // http://www.mapcoordinates.net/en
       // set marker for map graphic
      setMarker ( 29.931135 ,-90.105057);     // NOLA
       // setMarker (38.4126322,-102.8199814) // middle of no where KS
       //setMarker (32.99945001,-94.010009775);  // Texarkana
        //setMarker(40.245992,-111.697998) //provo utah
        //setMarker (32.99945001,-94.010009775);  // Texarkana
        //setMarker(40.245992,-111.697998) //provo utah
        //setMarker(42.098222 , -117.004395) //or, uth, nev border
        //setMarker(36.999811, -109.045143) // 4 corners
        //setMarker (25.839449, -80.178223) //miami
        //setMarker(45.989329, -116.913757) //oregon border


    };