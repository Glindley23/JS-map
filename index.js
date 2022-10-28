
//geolocation API to see current location of user 
const findMyLocation = () => {
// setting success function
    function success(pos) {
    //assign lat and long to variables
        const latitude  = pos.coords.latitude;
        const longitude = pos.coords.longitude;
    //create map element and tiles
         let map = L.map('map').setView([latitude, longitude], 13);
        
        tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
        .addTo(map);
    
    

    //creating a marker for current location
        let marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup("Current Location").openPopup();
        
    //creating a popup if user clicks a random spot of the map and gives coords
        let popup = L.popup();

        function onMapClick(e) {
        popup   
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);

        }   

        map.on('click', onMapClick);
    }
    
    //setting up error function
    function error(err) {
        console.warn(`ERROR`);
    }
   
    //generate map using geolocation
    navigator.geolocation.getCurrentPosition(success, error)


}


//call location function
findMyLocation();   
  
//update map's initialization