// 13.8834, -60.9879
let map = L.map('map').setView([13.8834, -60.9860], 10);
let marker = L.marker([13.8834, -60.9879]).addTo(map);
 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwZGF5IiwiYSI6ImNsMnZpMG5tdjBjM3kzanBob3FncDF1bm8ifQ.4JAtmIF1-atjwiGwrKTWmQ',
}).addTo(map);