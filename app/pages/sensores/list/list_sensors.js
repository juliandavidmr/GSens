import {
	Page,
	NavController,
	NavParams,
	ActionSheet
} from 'ionic-angular';

@Page({
	templateUrl: 'build/pages/sensores/list/list_sensors.html'
})
export class ListSensors {
	static get parameters() {
		return [
			[NavController],
			[NavParams]
		];
	}

	constructor(nav, navParams) {
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

	presentActionSheet(event) {
		let actionSheet = ActionSheet.create({
			title: 'Modify your album',
			buttons: [{
				text: 'Destructive',
				role: 'destructive',
				handler: () => {
					console.log('Destructive clicked');
				}
			}, {
				text: 'Archive',
				handler: () => {
					console.log('Archive clicked');
				}
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		this.nav.present(actionSheet);
	}
}
