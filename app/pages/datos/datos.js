import {Page, NavController} from 'ionic-angular';
//import {DatosCaptura} from '../../providers/datos-captura/datos-captura';

@Page({
  templateUrl: 'build/pages/datos/datos.html',
})
export class DatosPage {
  static get parameters() {
    return [
      [NavController]/*,
      [DatosCaptura]*/
    ];
  }

  constructor(nav/*, dataService*/) {
    this.nav = nav;
    /*this.dataService = dataService;

    this.items_captura = [];

    this.dataService.getDocumentsDatosCaptura().then((result) => {
      this.items_captura = result;
      console.log("Trayendo datos: " + JSON.stringify(result));
    });*/
  }
}
