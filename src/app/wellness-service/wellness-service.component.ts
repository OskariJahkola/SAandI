import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals.service'

@Component({
  selector: 'app-wellness-service',
  templateUrl: './wellness-service.component.html',
  styleUrls: ['./wellness-service.component.scss']
})
export class WellnessServiceComponent implements OnInit {

  constructor(private glob:Globals) { }

  ngOnInit() {
  }

  bookWellness()
  {
      this.glob.serviceSelected = false;
      if (!this.glob.serviceSelected)
      {
          console.log("going back FROM wellness service");
      }
      else
      {
          console.log("this is not supposed to happend (FROM wellness)");
      }
  }
}
