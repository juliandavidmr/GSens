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
}
