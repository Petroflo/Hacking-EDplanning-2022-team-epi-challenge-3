
async function getData() {
  return await new Promise((resolve, reject) => {
    fetch("../server/Data.json")

     .then(response => {
        // console.log(response);
       return response.json();

        }).then(data_from_fetched => {
         let data = data_from_fetched;
         console.log(data_from_fetched);
         resolve(data_from_fetched);
   })
 })    
}
//console.log("hello");
async function doto() {
  //console.log("hello2");

  let map = L.map('map').setView([13.8834, -60.9860], 10);
  let search = "Clendon Mason Memorial";                                        // when reseach a school
  let books = await getData();
  var mapM = [];
  
  titleL(map);
  process_array(books, map, mapM);
  // my_search(books, map, search, mapM);
};

console.log(await doto())

function titleL(map){
    L.control.locate().addTo(map);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwZGF5IiwiYSI6ImNsMnZpMG5tdjBjM3kzanBob3FncDF1bm8ifQ.4JAtmIF1-atjwiGwrKTWmQ',
}).addTo(map);


//var circle = circle_danger(map);
var volcan = volcan_danger(map);

var polygon = polygon_danger(map);
    return map;
}

function volcan_danger(map) {
  return L.polygon([
    [13.896410,-60.968775],
    [13.956059,-60.924327],
    //[13.896410,-60.968775],
    [13.968969,-60.900950],
    [13.982379,-60.897045],
    [13.95, -60.95],
    [13.874413,-60.989983],
    [13.830079,-61.006110],
    [13.759061,-61.038021],
    [13.75, -61.009],
    [13.70, -60.94],
    [13.75, -60.94],
    [13.79, -60.90],
    [13.79, -60.90],
    [13.81, -60.96]
  ], {
    color: 'red',
  }).addTo(map);
}

function polygon_danger(map) {
  return L.polygon([

    [13.952060,-61.038043],
    [13.932068,-60.994100],
    [13.874413,-60.989983],
    [13.856081,-61.018119],
    [13.830079,-61.006110],
    [13.759061,-61.038021],
    [13.791072,-61.068559],
    [13.807409,-61.077824],
    [13.834746,-61.066168],
    [13.855081,-61.067522],
    [13.862414,-61.080561],
    [13.880912,-61.079203],
    [13.912407,-61.067522],
    [13.932401,-61.057915],
    [13.956059,-61.038699]
    ]).addTo(map);
}

function circle_danger(map) {
  return L.circle([13.8834, -60.9890], {
    color: 'yellow',
    fillColor: '#ECFF33',
    fillOpacity: 0.5,
    radius: 5500
  }).addTo(map);
}
function process_array(books, map, mapM) {
    mapM.splice(0, mapM.length)
    for (let i = 0; i < books.length; i++) {
        let name1 = books[i].name
        let address1 = books[i].address
        var pos = [books[i].latitude, books[i].longitude]
        var marker = L.marker(pos).addTo(map)
            .bindPopup(name1+'<br/>'+address1)
            .openPopup();
        mapM.push(marker);
    }
}

function my_search(books, map, search, mapM) {
  if (search == "")
    return;
    for (let i = 0; i < books.length; i++) {
      var RedIcon = new L.Icon({
        //https://github.com/pointhi/leaflet-color-markers                                                             ICON DIFFRENT
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      
      if (search == books[i].name) {
        let name1 = books[i].name
        let address1 = books[i].address
        let floods = books[i].Shelter_floods
        let fire = books[i].Shelter_fire
        let quake = books[i].Shelter_quake
        let tsunami = books[i].Shelter_tsunami
        let volcano = books[i].Shelter_volcano
        
        var pos = [books[i].latitude, books[i].longitude]
        L.marker(pos, {icon: RedIcon}).addTo(map)
        .bindPopup("School name: " +name1+'<br/>'+"Address: "+address1+'<br/>'+"Shelter floods: " +floods+'<br/>'+"Shelter fire: " + fire+'<br/>'+"Shelter quake: "+quake+'<br/>'+"Shelter tsunami: "+tsunami+'<br/>'+"Shelter volcano: "+volcano)
        .openPopup();
      }
      else
        map.removeLayer(mapM[i])
  }
}

const input = document.querySelector('input');
const log = document.getElementById('values');
let searchArray = [];

input.addEventListener('input', updateValue);

function updateValue() {
   let searchResult = input.value.toLowerCase();
   searchArray.push(searchResult);
    console.log(searchArray);
}

// console.log(searchArray)