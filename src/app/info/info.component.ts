import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss'],
	// Part of " Very Janky Fix™  "
	encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
