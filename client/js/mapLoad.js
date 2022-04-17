let map;

function initMap() {
    const longg = localStorage.getItem("long");
    localStorage.removeItem("long");
    const latt = localStorage.getItem("lat");
    localStorage.removeItem("lat");
    console.log(latt , "   long:", longg  );
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: parseFloat(latt), lng: parseFloat(longg) },
    zoom: 11,
  });
}

window.initMap = initMap;