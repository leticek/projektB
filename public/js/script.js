document.addEventListener('DOMContentLoaded', () => {

    var mymap = L.map('myMap', {
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false
    }).setView([50.0562386, 14.536936], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(mymap);

    L.marker([50.0562386, 14.536936]).addTo(mymap);

    console.log("haha");
});

