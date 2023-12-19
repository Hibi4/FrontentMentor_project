var map = L.map('map').setView([50.8655,4.3794], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// marker icon 
// var marker = L.marker([51.5, -0.09]).addTo(map);

L.marker([50.8655,4.3794]).addTo(map)

// 50.7365,4.3808 leuven
// 50.8655,4.3794 brussels
// 46.3630104, 2.9846608 france