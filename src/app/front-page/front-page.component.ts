import { Component, OnInit } from '@angular/core';
import { MatListModule, MatDatepickerModule } from '@angular/material';
import { Globals } from '../globals.service'

@Component({
	selector: 'app-front-page',
	templateUrl: './front-page.component.html',
	styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent implements OnInit {

	constructor(private glob:Globals) { }
	ngOnInit() {
	}

	addEvent: boolean = false;

	showForm()
	{
		this.addEvent = true;
	}
	addEventClicked()
	{
		this.addEvent = false;
	}

	action() {
		this.glob.selIndex = 1;
	}
	gotoProviders() {
		this.glob.selIndex = 1;		
	}
}
