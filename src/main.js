require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Compass",
  "dojo/domReady!"
], function(Map, MapView, Compass) {
  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",  // Reference to the DOM node that will contain the view
    map: map,               // References the map object created in step 3
    zoom: 4,  // Sets the zoom level based on level of detail (LOD)
    center: [15, 65]  // Sets the center point of view in lon/lat
  });

  var compassWidget = new Compass({
    view: view
  });

  // Add the Compass widget to the top left corner of the view
  view.ui.add(compassWidget, "top-left");
});
