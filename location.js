var map = L.map('myMap').setView([28.64217, -106.14682], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var customIcon = L.icon({
    iconUrl: '/src/img/marker.png',
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var marker = L.marker([28.64217, -106.14682], { icon: customIcon }).addTo(map);

