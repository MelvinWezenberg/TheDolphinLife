$(()=> {
function initMap() {
        var uluru = {lat: 45.724738, lng: 11.982582};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
}
    
