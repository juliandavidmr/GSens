import {
	Page,
	NavController,
	ActionSheet,
	Clipboard,
	Alert
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
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			createAt: new Date()
		}, {
			nombre: 'Sensor de nivel',
			referencia: 'SSR',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
					this.alerta(sensor);
				}
			}]
		});
		this.nav.present(actionSheet);
	}

  alerta(sensor) {
		//Alerta
		let alert = Alert.create({
			title: sensor.nombre,
			subTitle: sensor.descripcion,
			buttons: ['OK']
		});
		this.nav.present(alert);
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
