function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(36.298975, 59.549329),
      zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
  }