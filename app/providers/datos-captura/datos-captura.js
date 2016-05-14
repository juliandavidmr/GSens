import {Injectable, NgZone} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

var PouchDB = require('pouchdb');
var config = require('../config');

@Injectable()
export class DatosCaptura {
  static get parameters(){
    return [
      [Http]
    ]
  }

  constructor(http) {
    this.datos_socket = [];
    this.socketHost = 'http://127.0.0.1:3000';

    this.zone = new NgZone({enableLongStackTrace: false});

    this.socket.on('datos datos', (dd) => {
      this.zone.run(() => {
        this.datos_socket.push(dd);
      })
    })
  }
}
