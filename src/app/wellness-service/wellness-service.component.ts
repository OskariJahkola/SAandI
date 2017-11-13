import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals.service';

@Component({
  selector: 'app-wellness-service',
  templateUrl: './wellness-service.component.html',
  styleUrls: ['./wellness-service.component.scss']
})
export class WellnessServiceComponent implements OnInit {
  constructor(private glob:Globals) { }

  ngOnInit() {
  }

  pageContent: string = "booking-info";
  goBack()
  {
      if (this.pageContent == "booking-info")
      {
          this.glob.serviceSelected = "none";
      }
      else if (this.pageContent == "contact-wellness")
      {
          this.pageContent = "booking-info";
      }
  }

  contactProvider()
  {
      this.pageContent = "contact-wellness";
      console.log("show contact form please");
  }

  sendMessage()
  {
      this.pageContent = "booking-info";
  }

}
