import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConnectivityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectivityService {
  static get parameters(){
    return [[Platform]]
  }

  constructor(platform) {
    this.platform = platform;
    //this.http = http;
    this.data = null;

    this.onDevise = this.platform.is('ios') || this.platform.is('android');
  }

  isOnline() {
		if(this.onDevise && navigator.connection) {
			let networkState = navigator.connection.type;
			return networkState !== Connection.NONE;
		} else {
			return navigator.onLine;
		}
	}

	isOffline() {
		if(this.onDevise && navigator.connection) {
			let networkState = navigator.connection.type;
			return networkState === Connection.NONE;
		} else {
			return !navigator.onLine;
		}
	}

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
