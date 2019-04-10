function initializeMap() {
    let mapElement = document.querySelector(".contact__map");
    let greenich = { lat: 41.027054, lng: -73.620071 };

    mapElement = new google.maps.Map(mapElement, {
        center: greenich,
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: greenich,
        map: mapElement,
        title: 'Hello World!'
    });
}