import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals.service'

@Component({
  selector: 'app-catering-service',
  templateUrl: './catering-service.component.html',
  styleUrls: ['./catering-service.component.scss']
})
export class CateringServiceComponent implements OnInit {

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
      else if (this.pageContent == "contact-catering")
      {
          this.pageContent = "booking-info";
      }
  }

  contactProvider()
  {
      this.pageContent = "contact-catering";
      console.log("show contact form please");
  }

  sendMessage()
  {
      this.pageContent = "booking-info";
  }
}
