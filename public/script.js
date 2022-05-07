
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

    return map;
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