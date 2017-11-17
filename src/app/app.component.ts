import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Globals } from './globals.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Recycle4Me';
    customerstate: string ='customer';

	constructor(public afAuth: AngularFireAuth, private util:Globals) {
		util.selIndex = 0;
	}

	googleLogin() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	facebookLogin() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
	}

	emailLogin() {
		// Jos me joskus halutaan tehä oma rekisteröinti
		return;
	}

	logout() {
		this.afAuth.auth.signOut();
	}
    switchToService() {
        this.customerstate='service-registration';
    }
    switchCustomer() {
        this.customerstate='customer';
    }
	action() {
		this.util.selIndex = 0;
	}
	loginProvider() {
		this.customerstate='service-account'
	}
	logoutProvider() {
		this.customerstate='service-registration'
	}
}
