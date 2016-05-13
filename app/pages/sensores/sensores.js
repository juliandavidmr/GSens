import { Page, NavController, ActionSheet, Clipboard,	Alert } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { ShowOneSensorPage } from "../show-one-sensor/show-one-sensor";

@Page({
	templateUrl: 'build/pages/sensores/sensores.html',
})
export class SensoresPage {
	static get parameters() {
		return [
			[NavController],
			[Data]
		];
	}

	constructor(nav, dataService) {
		this.nav = nav;

		this.searchQuery = '';

		this.dataService = dataService;

    this.items = [];
		this.items_original = [];

    this.dataService.getDocuments().then((result) => {
      this.items = result;
      this.items_original = result;
    });
	}

	presentActionSheet(event, _sensor) {
		var sensor = _sensor.NombreSensor;
		let actionSheet = ActionSheet.create({
			title: 'Opciones para "' + sensor + '"',
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

	//Alerta
  alerta(sensor) {
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

	initializeItems() {
		this.items = this.items_original;
	}

	/**
	 * Ver un sensor
	 * @param  {[type]} event [description]
	 * @param  {[type]} item  [description]
	 * @return {[type]}       [description]
	 */
	openSensor(event, item) {
		this.nav.push(ShowOneSensorPage, {
			item: item
		})
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

	/**
	 * Retorna los items que coincidan con la busqueda de la variable searchbar.value
	 * @param  {[type]} searchbar [description]
	 * @return {[type]}           [description]
	 */
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
			if (v.NombreSensor.toLowerCase().indexOf(q.toLowerCase()) > -1) {
				return true;
			}
			return false;
		})
	}
}
