document.addEventListener('DOMContentLoaded', function() {// el evento DOMContentLoaded se activa cuando se carga la escructura de html    
  iniciarApp();
})

function iniciarApp() {

  let origenLat;
  let OrigenLng;
  let origen;
  let punto = { lat: 10.074033 , lng: -84.316314  }
  let map, infoWindow;

  //Iniciar Mapa con la ubicación inicial
  function iniciarMapa() {

      map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 10.074033 , lng: -84.316314  },  
      zoom: 17,
      });
      var marker = new google.maps.Marker({
        position: punto,
        map: map,});

      infoWindow = new google.maps.InfoWindow();
  }

  window.initMap = iniciarMapa;




  // Agregar evento de clic al botón
  document.getElementById("obtenerDireccion").addEventListener("click", solicitarPermisoGEO);

  //Solicitar permisos de geolocalización para asignarlo a las variables globales
  function solicitarPermisoGEO(){
      navigator.geolocation.getCurrentPosition(function(position)
      {
          origenLat = position.coords.latitude;
          OrigenLng = position.coords.longitude;

          //Utilizar latitud y longitud como punto de origen para la ruta
          origen = new google.maps.LatLng(origenLat, OrigenLng);

          trazarRuta(origen);
      });
  }

  function trazarRuta(origen){
      //Coordenas de destino
      let destino = new google.maps.LatLng(10.074033, -84.316314);

      let directionsService = new google.maps.DirectionsService();
      let directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(map)

      var request = {
          origin: origen,
          destination: destino,
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
      };

      directionsService.route(request, function(result, status)
      {
          if(status == google.maps.DirectionsStatus.OK){
              directionsRenderer.setDirections(result);
          }

        });

      }
  
  }
   
   