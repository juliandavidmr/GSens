import {
	Page,
	NavController,
  ActionSheet
} from 'ionic-angular';

/*
  Generated class for the SensoresPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
	templateUrl: 'build/pages/sensores/sensores.html',
})
export class SensoresPage {
	static get parameters() {
		return [
			[NavController]
		];
	}

	constructor(nav) {
		this.nav = nav;

		this.sensores = [{
			nombre: 'Sensor de humedad',
			referencia: 'EERRR',
			createAt: new Date()
		}, {
			nombre: 'Sensor de nivel',
			referencia: 'SSR',
			createAt: new Date()
		}]
	}

	presentActionSheet(event, sensor) {
		let actionSheet = ActionSheet.create({
			title: 'Opciones para "' + sensor.nombre + '"',
			buttons: [{
				text: 'Destructive',
				role: 'destructive',
				handler: () => {
					console.log('Destructive clicked');
				}
			}, {
				text: 'Portapapeles',
				handler: () => {
					console.log("Copiado -> " + JSON.stringify(sensor));
					Clipboard.copy(JSON.stringify(sensor));
				}
			}, {
				text: 'Captura',
				handler: () => {
					console.log('Archive clicked');
				}
			}, {
				text: 'Mas información',
				role: 'cancel',
				handler: () => {
					console.log('Informacion clicked');
				}
			}]
		});
		this.nav.present(actionSheet);
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
