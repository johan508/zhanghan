
function myMap(){
    const mapProp = {
        center: new google.maps.LatLng(45.40176566237905,-71.89055828210243),
        zoom:5,
    };

    const map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}