import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the TutorialPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tutorial/tutorial.html',
})
export class TutorialPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;

    this.slides = [
     {
       title: "Bienvenido a GSens!",
       description: "<b>GSens</b> te ayuda a monitorear en tiempo real el nivel del agua de los rios ubicados en Florencia-Caquetá.",
       image: "img/ica-slidebox-img-1.png",
     },
     {
       title: "Monitoreo",
       description: "<b>GSens</b> permanece en estado constante monitoreo de distintos sensores.",
       image: "img/ica-slidebox-img-2.png",
     },
     {
       title: "What is Ionic Platform?",
       description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
       image: "img/ica-slidebox-img-3.png",
     },
     {
       title: "What is Platform?",
       description: "The <b>Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
       image: "img/ica-slidebox-img-5.png",
     }
   ];
  }
}
