import 'es6-shim';
import { App,	IonicApp,	Platform, Storage, LocalStorage } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//Pages
import { GettingStartedPage } from './pages/getting-started/getting-started';
import { ListPage } from './pages/list/list';
import { SensoresPage } from './pages/sensores/sensores';
import { ShowOneSensorPage } from './pages/show-one-sensor/show-one-sensor';
import { UsuarioPage } from './pages/usuario/usuario';
import { MapsPage } from './pages/maps/maps';
import { DatosPage } from './pages/datos/datos';
import { LoginPage } from "./pages/login/login";

//Providers
import { Data } from './providers/data/data';
import { ConnectivityService } from './providers/connectivity-service/connectivity-service';
//import { DatosCaptura } from './providers/datos-captura/datos-captura';

@App({
	templateUrl: 'build/app.html',
	providers: [
		[Data],
		[ConnectivityService]
	],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config
})
class MyApp {
	static get parameters() {
		return [
			[IonicApp],
			[Platform]
		];
	}

	constructor(app, platform) {
		this.app = app;
		this.platform = platform;

		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [{
			title: 'Dashboard',
			component: GettingStartedPage,
			icon: 'aperture'
		}, {
			title: 'List',
			component: ListPage,
			icon: 'list'
		}, {
			title: 'Sensores',
			component: SensoresPage,
			icon: 'radio'
		}, {
			title: 'Usuario',
			component: UsuarioPage,
			icon: 'person'
		}, {
			title: 'Maps',
			component: MapsPage,
			icon: 'pin'
		}, {
			title: 'Captura',
			component: DatosPage,
			icon: 'star'
		}, {
			title: 'Login',
			component: LoginPage,
			icon: 'person'
		}];

		this.rootPage = GettingStartedPage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		let nav = this.app.getComponent('nav');
		nav.setRoot(page.component);
	}
}
