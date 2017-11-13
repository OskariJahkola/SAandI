import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals.service'

@Component({
  selector: 'app-life-service',
  templateUrl: './life-service.component.html',
  styleUrls: ['./life-service.component.scss']
})
export class LifeServiceComponent implements OnInit {

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
      else if (this.pageContent == "contact-life")
      {
          this.pageContent = "booking-info";
      }
  }

  contactProvider()
  {
      this.pageContent = "contact-life";
      console.log("show contact form please");
  }

  sendMessage()
  {
      this.pageContent = "booking-info";
  }
}
