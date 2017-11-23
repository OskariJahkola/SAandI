import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
