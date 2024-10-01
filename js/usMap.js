// Map Feature w mapMarker on SVG from LAT. and LONG.
// Remote https://github.com/achord/svg-usa-map.git
// Resources : gps-coordinates.net
// t: 49.3931, r: -66.95, b: 24.545874, l: -124.75

// Bounding Box must be exact in accordance with SVG in use. Also keep in mind the projection of the map. E.g. Mercator(Google maps)
var usa = {
  t: 49.3931,
  r: -66.95,
  b: 24.545874,
  l: -124.75,
}

function setMarkers() {
  var marker = document.querySelectorAll('.icon-marker')
  marker.forEach(function (el) {
    setMarker(el, el.dataset.lat, el.dataset.lng)
  })
}

function setMarker(el, lat, long) {
  var moduleWidth = document.getElementById('map-container').offsetWidth
  var moduleHeight = document.getElementById('map-container').offsetHeight

  var top = usa.t
  var right = usa.r
  var bottom = usa.b
  var left = usa.l

  var markerHeight = el.offsetHeight
  var markerWidth = el.offsetWidth

  var width = right - left
  var height = top - bottom

  // Apply Mercator projection to latitude
  var mercatorLat = Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
  var mercatorTop = Math.log(Math.tan(Math.PI / 4 + (top * Math.PI) / 360))
  var mercatorBottom = Math.log(
    Math.tan(Math.PI / 4 + (bottom * Math.PI) / 360)
  )

  // Normalize latitude and longitude within the bounding box
  var latNormalized =
    (mercatorTop - mercatorLat) / (mercatorTop - mercatorBottom)
  var longNormalized = (long - left) / width

  // Convert normalized values to percentages
  var markerTop = latNormalized * 100
  var markerLeft = longNormalized * 100

  // Adjust for marker dimensions to place the bottom of the marker at the coordinates
  var adjustedMarkerTop = markerTop - (markerHeight / moduleHeight) * 100
  var adjustedMarkerLeft = markerLeft - (markerWidth / moduleWidth) * 50

  // Set position within the map container
  el.style.top = adjustedMarkerTop + '%'
  el.style.left = adjustedMarkerLeft + '%'
  el.style.position = 'absolute' // Ensure the marker is positioned absolutely
}

window.onload = function () {
  // set markers for map graphic
  setMarkers()
}
