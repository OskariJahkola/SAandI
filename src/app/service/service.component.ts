import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

@NgModule({
  imports: 
    [NgbModule.forRoot()
  ],
})

export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
