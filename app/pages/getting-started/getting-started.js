import {Page} from 'ionic-angular';
import {DatosPage} from '../datos/datos'
import { Data } from '../../providers/data/data';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {

  static get parameters(){
    return [[Data]];
  }

  constructor(dataService) {
    //this.datosPage = DatosPage;

    this.dataService = dataService;
    this.items = [];

    this.dataService.getDocuments().then((result) => {
      this.items = result;
    });
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
}
