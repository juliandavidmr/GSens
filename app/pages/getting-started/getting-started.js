import {Page} from 'ionic-angular';
import {DatosPage} from '../datos/datos'
import {ShowOneSensorPage} from "../show-one-sensor/show-one-sensor";

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {

  constructor() {
    this.searchQuery = '';
  }
}
