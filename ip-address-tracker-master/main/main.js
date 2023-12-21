var map = L.map('map').setView([50.8655,4.3794], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let ip__adress;
let result = "";

// marker icon 
// var marker = L.marker([50.93404006958008, 4.327270030975342]).addTo(map);

L.marker([50.93404006958008,4.327270030975342]).addTo(map)

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Leuven&appid=2b5b0b7b0b0b0b0b0b0b0b0b0b0b0b0b')

// https://geo.ipify.org/api/v2/country?apiKey=
// http://api.ipstack.com/134.201.250.155?access_key=
fetch('https://geo.ipify.org/api/v2/country?apiKey=')
.then(response => response.json())
.then(data => {
    console.log(data);
    getIP(data.ip);
    // console.log("country: "+ip__adress);
    // var marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
    // marker.bindPopup("<b>Country: </b>" + data.location.country + "<br><b>City: </b>" + data.location.region).openPopup();
});

function getIP(ip) {
    // return ip;
    console.log("La valeur de l'ip: "+ip);
    result = "http://api.ipstack.com/"+ip+"?access_key=";
    console.log(result);
    
}

fetch(result)
.then(response => response.json())
.then(data => {
    console.log(data);
});

/* // Define the API URLs and keys
const geoIpifyUrl = "https://geo.ipify.org/api/v2/country";
const geoIpifyKey = "YOUR_API_KEY";
const ipStackUrl = "http://api.ipstack.com";
const ipStackKey = "YOUR_ACCESS_KEY";

// Define a function to get the IP address from geo.ipify API
async function getIpFromGeoIpify() {
  // Make a GET request to geo.ipify API with your key
  const response = await fetch(`${geoIpifyUrl}?apiKey=${geoIpifyKey}`);
  // Check if the response is ok
  if (response.ok) {
    // Parse the response as JSON
    const data = await response.json();
    // Return the IP address from the data
    return data.ip;
  } else {
    // Throw an error if the response is not ok
    throw new Error(`An error occurred: ${response.status}`);
  }
}

// Define a function to get the location data from ipstack API
async function getLocationFromIpStack(ip) {
  // Make a GET request to ipstack API with your key and the IP address
  const response = await fetch(`${ipStackUrl}/${ip}?access_key=${ipStackKey}`);
  // Check if the response is ok
  if (response.ok) {
    // Parse the response as JSON
    const data = await response.json();
    // Return the location data from the data
    return data;
  } else {
    // Throw an error if the response is not ok
    throw new Error(`An error occurred: ${response.status}`);
  }
}

// Define a function to use both APIs and log the results
async function useBothApis() {
  try {
    // Get the IP address from geo.ipify API
    const ip = await getIpFromGeoIpify();
    // Get the location data from ipstack API
    const location = await getLocationFromIpStack(ip);
    // Log the IP address and the location data
    console.log(`IP address: ${ip}`);
    console.log(`Location: ${location.country_name}, ${location.region_name}, ${location.city}`);
  } catch (error) {
    // Log the error if any
    console.error(error);
  }
}

// Call the function to use both APIs
useBothApis();
 */ 

// console.log(getIP() +" is the local ip__adress");

// 50.7365,4.3808 leuven
// 50.8655,4.3794 brussels
// 46.3630104, 2.9846608 france
// 50.93404006958008, 4.327270030975342 flanders