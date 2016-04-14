import {Page} from 'ionic-angular';
import {DatosPage} from '../datos/datos'

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  
  constructor() {
    this.datosPage = DatosPage;
  }
}
