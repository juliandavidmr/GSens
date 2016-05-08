var ip = 'http:127.0.0.1:15984';

module.exports = {
	pouchdb: {
		name_database: 'mytestdb',
		name_database_1: 'testdb',
		username: 'app_pouchdb_usuario',
		//password: '123123',
		remote_url_datos_sensor: ip + '/datos_sensor',
		remote_url_datos_captura: ip + '/datos-captura'
	},
	server_http: {
		url: 'http://192.168.1.57:3000'
	}
}
