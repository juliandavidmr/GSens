import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import {NgZone} from "angular2/core";
import moment from "moment";

const conf = require('../../providers/config');

@Page({
  templateUrl: 'build/pages/datos/datos.html',
})
export class DatosPage {
  static get parameters() {
    return [
      [NavController],
      [NavParams]
    ];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    this.pesta = 'datos';

    moment.locale('es');
    this.moment = moment;
    this.moment.locale('es');

    this.datos = [];
    this.sensores = [];
    this.socketHost = conf.ip + ':' + conf.port_socket;

    this.zone = new NgZone({
      enableLongStackTrace: false
    });

    this.socket = io(this.socketHost);

    // Captura el parametro idSensor enviado desde SensoresPage
    // undefined si no hay nada
    this.selectedidSensor = navParams.get('idSensor');
    if(this.selectedidSensor == undefined) {

    }

    this.socket.on('datos datos', (dd) => {
      this.zone.run(() => {
        this.datos = dd.datosensores;
        this.sensores = dd.tiposensores;
        console.log( JSON.stringify(this.datos));
      });
    });
  }

  send(message) {
    if(message && message != "") {
      this.socket.emit("chat_message", message);
    }
    this.chatBox = "";
  }
}
