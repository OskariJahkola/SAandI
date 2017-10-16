import { Coords } from '../model/coords';
import { Pickup } from '../model/pickup';
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { Location } from '@angular/common';
import { NguiMapComponent } from '@ngui/map';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  // <-- #1 import module
import {} from '@types/googlemaps';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var google: any;
@Component({
	selector: 'app-gmap',
	templateUrl: './gmap.component.html',
	styleUrls: ['./gmap.component.scss']
})

export class GmapComponent implements AfterViewInit, OnDestroy {
	@ViewChild(NguiMapComponent)
	map: NguiMapComponent;
	marker: any;
	pos= {
		lat: 61.064846,
		lng: 28.093114
	};

	mapOptions = {
		center: this.pos,
		zoom: 12
	};

	param: any;
	geoloc: Coords = null;
	geoSub: any;

	pickup: Pickup;
	pickupform: FormGroup;

	pickupsRef: AngularFireList<any>;

	constructor(private geolocService: GeolocationService,
							private fb: FormBuilder,
							private db: AngularFireDatabase) {
		const geoObserver = {
			next: x => this.geoloc = new Coords(x.coords.latitude, x.coords.longitude, x.coords.accuracy),
			error: err => console.error('Geolocation observer error: ' + err),
			complete: () => this.updateMapGeoloc(),
		};

		this.geoSub = geolocService.getCurrentPosition().subscribe(subject => subject(geoObserver));

		this.pickup = new Pickup();
		this.createForm(this.pickup);
		this.pickupsRef = db.list('pickups');
	}

	createForm(pickup: Pickup) {
		this.pickupform = this.fb.group({
			address: [pickup.address, Validators.required],
			description: [pickup.description, Validators.required],
			timeofday: [pickup.timeofday]
		});
	}

	updateMapGeoloc() {
		this.pos.lat = this.geoloc.latitude;
		this.pos.lng = this.geoloc.longitude;
		this.map.mapOptions.center = this.pos;
		if (this.marker !== undefined) {
			this.marker.setPosition(this.pos);
		}
	}

	onMarkerInit(marker) {
		this.marker = marker;
	}

	ngAfterViewInit() {
		let __this = this;
	}

	onMarkerDrag(event) {
		this.setLoc(event.latLng);
	}

	mapClicked(event) {
		this.setLoc(event.latLng);
	}

	ngOnDestroy() {
		if (this.geoSub) {
			this.geoSub.unsubscribe();
		}
	}

	setLoc(cords: any) {
		this.marker.setPosition(cords);
		this.pos.lat = cords.lat();
		this.pos.lng = cords.lng();

	}

	setGeo() {
		this.marker.setPosition({lat: this.geoloc.latitude, lng: this.geoloc.longitude});
		this.map.mapOptions.center = this.pos;
		this.map.setCenter();
		// this.map.setCenter({lat:this.geoloc.latitude, lng:this.geoloc.longitude});
	}

	getLoc() {
		return this.pos;
	}

	onPickupSubmit() {
		this.pickup = this.pickupform.value;
		this.pickupsRef.push(this.pickup);
	}

}

interface Marker {
	position: google.maps.LatLng;
	label?: string;
	draggable: boolean;
}
