import {Page} from 'ionic-angular';
import {DatosPage} from '../datos/datos'
import { Data } from '../../providers/data/data';
import {ShowOneSensorPage} from "../show-one-sensor/show-one-sensor";

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {

  static get parameters(){
    return [[Data]];
  }

  constructor(dataService) {
    //this.datosPage = DatosPage;
    this.searchQuery = '';
    this.dataService = dataService;
    this.items_original = [];
    this.items = [];

    this.dataService.getDocuments().then((result) => {
      this.items = result;
      this.items_original = result;
    });
  }

  initializeItems() {
    this.items = this.items_original;
  }

  addData(){
    let date = new Date();
    let newDoc = {
      '_id': date,
      'message': date.getTime(),
      'Sensor': 'Sensor xxxxx',
      'Dato': 23
    };
    this.dataService.addDocument(newDoc);
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() === '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.Sensor.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}
