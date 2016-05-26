//var ip 		= 'http://192.168.1.57';
var ip 		= 'http://127.0.0.1';
var port 	= '15984';

module.exports = {
	ip: ip,
	port_socket: '3000',
	pouchdb: {
		name_database: 'mytestdb',
		username: 'juliandavid',
		password: '123123',
		remote_url: 'http://127.0.0.1:15984/datos_sensor',
		port: port
	},
	server_http: {
		url: ip + ':3000'
	}
}
