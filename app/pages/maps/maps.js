import {Page, NavController} from 'ionic-angular';
import {ConnectivityService} from '../../providers/connectivity-service/connectivity-service';

/*
  Generated class for the MapsPage page.

  Mostrar mapa con todos los sensores

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/maps/maps.html',
})
export class MapsPage {
  static get parameters() {
    return [
      [NavController],
      [ConnectivityService]
    ];
  }

  constructor(nav, connectivityService) {
    this.nav = nav;
    this.connectivity = connectivityService;

    this.map = null;
    this.mapInitialised = false;
    this.apiKey = null;

    this.loadGoogleMaps();
  }


  /**
   * Carga el componente del mapa en la vista
   */
  loadGoogleMaps() {
    var me = this;
    this.addConnectivityListeners();

    if(typeof google == "undefined" || typeof google.maps == "undefined"){
        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();

        if(this.connectivity.isOnline()) {
            console.log("online, loading map");

            //Load the SDK
            window.mapInit = function(){
                me.initMapLocalization();
                me.enableMap();
            }

            let script = document.createElement("script");
            script.id = "googleMaps";

            if(this.apiKey){
                script.src = 'http://maps.google.com/maps/api/js?key=' + apiKey + '&callback=mapInit';
            } else {
                script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
            }

            document.body.appendChild(script);
        }
    } else {
        if(this.connectivity.isOnline()){
            console.log("showing map");
            this.initMapLocalization();
            this.enableMap();
        } else {
            console.log("disabling map");
            this.disableMap();
        }
    }
  }

  /**
   * Inicializar mapa desde una posicion especifica
   */
  initMap(){
    this.mapInitialised = true;
    let latLng = new google.maps.LatLng(1.6223144999999999, -75.60204519999999);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  /**
   * Inicializar mapa desde la posicion de donde se encuentre el usuario.
   */
  initMapLocalization(){
    this.mapInitialised = true;

    navigator.geolocation.getCurrentPosition( (position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        console.log(position);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }, (error) => {
        console.log(error);
    });
  }

  /**
   * Mensajes de estados del componente mapa
   */
  disableMap(){
    console.log("disable map");
  }

  enableMap(){
    console.log("enable map");
  }

  /**
   * [addConnectivityListeners description]
   */
  addConnectivityListeners(){
    var me = this;

    var onOnline = function(){
        setTimeout(function(){
            if(typeof google == "undefined" || typeof google.maps == "undefined"){
                me.loadGoogleMaps();
            } else {
                if(!me.mapInitialised){
                    me.initMap();
                }

                me.enableMap();
            }
        }, 2000);
    };

    var onOffline = function(){
        me.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
  }

  /**
   * addMarker, marcador en el mapa
   */
  addMarker(){
    console.log("Center: " + this.map.getCenter());
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(this.map, marker);
    });
  }
}
