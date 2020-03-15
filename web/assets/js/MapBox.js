mapboxgl.accessToken = 'pk.eyJ1IjoiZW5kcmV2ZWtvbnkiLCJhIjoiY2s3czUzNnZ5MGswejNsb3VuZHd3NmNibSJ9.z9WGFuXZ6iBE4z9m8-aiLA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/endrevekony/ck7t60ets47jo1imvvhldupau?optimize=true ', // replace this with your style URL
  center: [ 19.66078, 46.09922],
  minZoom: 3,
  zoom: 17
});

map.addControl(new mapboxgl.NavigationControl());

var marker = new mapboxgl.Marker()
.setLngLat([ 19.66154, 46.09922])
.addTo(map);
