import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

var PouchDB = require('pouchdb');
var config = require('../config');

@Injectable()
export class DatosCaptura {
  static get parameters(){
    return [
      [Http]
    ]
  }

  constructor() {
    this.db = new PouchDB(config.pouchdb.name_database_1);

    let options = {
      live: true,
      retry: true,
      continuous: true,
      auth: {
        username: config.pouchdb.username,
        password: config.pouchdb.password
      }
    };

    this.db.sync(config.pouchdb.remote_url_datos_captura, options);
  }

  getDocumentsDatosCaptura() {
		return new Promise(resolve => {
			this.db.allDocs({
				include_docs: true
			}).then((result) => {
				this.data = [];
				let docs = result.rows.map((row) => {
					this.data.push(row.doc);
					resolve(this.data);
				});

				this.db.changes({
					live: true,
					since: 'now',
					include_docs: true
				}).on('change', (change) => {
					this.handleChange(change);
				});
			}).catch((error) => {
				console.log("ERROR DE SINCRONIZACION PouchDB, DatosCaptura, \n\n " + error);
			});
		});
	}

	handleChange(change) {
		let changedDoc = null;
		let changedIndex = null;

		this.data.forEach((doc, index) => {
			if (doc._id === change.id) {
				changedDoc = doc;
				changedIndex = index;
			}
		});

		//A document was deleted
		if (change.deleted) {
			this.data.splice(changedIndex, 1);
		} else {
			//A document was updated
			if (changedDoc) {
				this.data[changedIndex] = change.doc;
			}
			//A document was added
			else {
				this.data.push(change.doc);
			}
		}
	}
}
