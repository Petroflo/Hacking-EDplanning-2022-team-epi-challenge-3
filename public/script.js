
async function getData() {
  return await new Promise((resolve, reject) => {
    fetch("../server/Schools Survey for Giga.json")

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
console.log("hello");
async function doto() {
   console.log("hello2");

  let map = L.map('map').setView([13.8834, -60.9860], 10);
  titleL(map);
  let books = await getData();
  process_array(books, map);
};

console.log(await doto())

function titleL(map){

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


function process_array(books, map) {
    for (let i = 0; i < books.length; i++) {
        let name1 = books[i].name
        let address1 = books[i].address
        let shelter = books[i].Shelter_tsunami
        L.marker([books[i].latitude, books[i].longitude]).addTo(map)
            .bindPopup(name1+'<br/>'+address1+'<br/>'+'shelter for tsunami:'+shelter)
            .openPopup();
            
    }
}

