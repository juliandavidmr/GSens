import {Page, NavController, Storage, LocalStorage } from 'ionic-angular';

/*
  Generated class for the UsuarioPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/usuario/usuario.html',
})
export class UsuarioPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
