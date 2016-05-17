import {Page, NavController} from 'ionic-angular';
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
      [Http]
    ];
  }

  constructor(nav) {
    this.nav = nav;

    moment.locale('es');
    this.moment = moment;
    this.moment.locale('es');

    this.datos = [];
    this.sensores = [];
    //this.socketHost = 'http://127.0.0.1:3000';
    this.socketHost = conf.ip + ':' + conf.port_socket;

    this.zone = new NgZone({enableLongStackTrace: false});

    this.socket = io(this.socketHost);

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
