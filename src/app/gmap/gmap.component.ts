import { Coords } from '../model/coords';
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';
import { Location } from '@angular/common';
import { NguiMapComponent } from '@ngui/map';


import {} from '@types/googlemaps';
declare var google: any;
@Component({
	selector: 'app-gmap',
	templateUrl: './gmap.component.html',
	styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements AfterViewInit, OnDestroy{
    @ViewChild(NguiMapComponent)
    map:NguiMapComponent;
    marker:any;
    pos={lat:61.064846, lng:28.093114};
    mapOptions={
            center: this.pos,
            zoom: 12
    };
   
	param: any;
	geoloc: Coords = null;
    geoSub:any;
    constructor(private geolocService:GeolocationService) {
        const geoObserver = {
			next: x => this.geoloc = new Coords(x.coords.latitude, x.coords.longitude, x.coords.accuracy),
			error: err => console.error('Geolocation observer error: ' + err),
			complete: () => this.updateMapGeoloc(),
		};

		this.geoSub = geolocService.getCurrentPosition().subscribe(subject => subject(geoObserver));
    }
	updateMapGeoloc() {
        this.pos.lat=this.geoloc.latitude;
        this.pos.lng=this.geoloc.longitude;
        this.map.mapOptions.center=this.pos;
        if (this.marker!=undefined)
            this.marker.setPosition(this.pos)
    }
    onMarkerInit(marker) {
        this.marker=marker;
    }
	ngAfterViewInit() {
        var __this=this;
        
	}
    onMarkerDrag(event) {
        this.setLoc(event.latLng)
    }
    mapClicked(event) {
        this.setLoc(event.latLng)
    }
    ngOnDestroy() {
        if (this.geoSub) {
			this.geoSub.unsubscribe();
		}
    }
    setLoc(cords:any) {
        this.marker.setPosition(cords);
        this.pos.lat=cords.lat();
        this.pos.lng=cords.lng();
        
    }
    
	setGeo() {
        
        this.marker.setPosition({lat:this.geoloc.latitude, lng:this.geoloc.longitude})
        this.map.mapOptions.center=this.pos;
        this.map.setCenter();
        //this.map.setCenter({lat:this.geoloc.latitude, lng:this.geoloc.longitude});
	}
    getLoc() {
        return this.pos;
    }

}

interface Marker {
    
	position: google.maps.LatLng;
	label?: string;
	draggable: boolean;
}