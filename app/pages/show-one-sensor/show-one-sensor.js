import {Page, NavController, NavParams} from 'ionic-angular';
import {ConnectivityService} from '../../providers/connectivity-service/connectivity-service';

/*
  Generated class for the ShowOneSensorPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/show-one-sensor/show-one-sensor.html',
})
export class ShowOneSensorPage {
  static get parameters() {
    return [
      [NavController],
      [NavParams],
      [ConnectivityService]
    ];
  }

  constructor(nav, navParams, connectivityService) {
    this.nav = nav;
    this.connectivity = connectivityService;

    this.selectedItemSensor = navParams.get('item');
    console.log(JSON.stringify(this.selectedItemSensor));

  }
}
