import {
	Page,
	Events
} from 'ionic-angular';
import {
	DatosPage
} from '../datos/datos';
import {
	ShowOneSensorPage
} from "../show-one-sensor/show-one-sensor";
import Chart from "chart.js";


@Page({
	templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {

	constructor() {}

	onPageWillEnter() {
		const canvas = document.getElementById("myChart");

		var myChart = new Chart(canvas, {
			type: 'bar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3]
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
	}

}
