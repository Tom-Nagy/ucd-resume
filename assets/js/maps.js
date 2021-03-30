function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 46.619261,
            lng: -33.134766
        },
        zoom: 3
    });

    let labels = 'ABCDEEFGHIJKLMNOPQRSTUVWXYZ';

    let locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    // the map() method iterate through the locations array and return an array
    // as a result of looping through each items in the locations array
    // it is similar to a each loop.
    // here it takes 2 arguments, location (= current value of element in the array) and i (= index of the element in the array)
    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length] // will keep looping through the array compare to  i++ that stop at the end of it. 
        })
    })

    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

}