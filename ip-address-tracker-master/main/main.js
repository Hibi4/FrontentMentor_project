var map = L.map('map').setView([50.8655,4.3794], 6); 

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const geoIpifyUrl = "https://geo.ipify.org/api/v2/country";
const geoIpifyKey = "";
const ipStackUrl = "http://api.ipstack.com";
const ipStackKey = "";

/**
 * 
 * @returns 
 */
async function getIpFromGeoIpify() { 
  const response = await fetch(`${geoIpifyUrl}?apiKey=${geoIpifyKey}`);
  if(response.ok) { 
    const data = await response.json();
    document.getElementById("ip__address").innerHTML = data.ip;
    document.getElementById("location").innerHTML = data.location.region+ " "+ data.location.country;
    document.getElementById("timezone").innerHTML = "UTC "+data.location.timezone;
    document.getElementById("isp").innerHTML = data.isp;
    return data.ip; 
  } else { 
    throw new Error(`An error occurred: ${response.status}`);
  }
}

/**
 * 
 * @param {*} ip 
 * @returns 
 */
async function getLocationFromIpStack(ip) { 
  const response = await fetch(`${ipStackUrl}/${ip}?access_key=${ipStackKey}`);
  if(response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`An error occurred: ${response.status}`);
  }
}

/**
 * 
 */
async function displayDataOnMap() { 
  try { 
    const ip = await getIpFromGeoIpify(); 
    // const location = await getLocationFromIpStack(ip); 
    // L.marker([location.latitude, location.longitude]).addTo(map);
  } catch (error) {
    console.error(error);
  }
}

displayDataOnMap();
