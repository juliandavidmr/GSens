import {Page, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';
import {NgZone} from "angular2/core";

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

    this.datos = [];
    this.tiposensores = [];
    this.socketHost = 'http://127.0.0.1:3000';

    this.zone = new NgZone({enableLongStackTrace: false});

    this.socket = io(this.socketHost);

    this.socket.on('datos datos', (dd) => {
      this.zone.run(() => {
        this.datos = dd.datosensores;        
      });
    })
  }
}
