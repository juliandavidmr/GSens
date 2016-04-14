import {Page, NavController} from 'ionic-angular';

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
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
