import { BehaviorSubject } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeolocationService {

	public getCurrentPosition(): Subject<any> {
		return new BehaviorSubject(observer => {
			window.navigator.geolocation.getCurrentPosition(
				(position) => {
					observer.next(position);
					observer.complete();
				},
				(error) => {
					observer.error(error);
						switch (error.code) {
							case 1:
								observer.error('You have rejected access to your location');
								break;
							case 2:
								observer.error('Unable to determine your location');
								break;
							case 3:
								observer.error('Service timeout has been reached');
								break;
						}
				});
		});
	}
}