import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals.service'

@Component({
  selector: 'app-music-service',
  templateUrl: './music-service.component.html',
  styleUrls: ['./music-service.component.scss']
})
export class MusicServiceComponent implements OnInit {

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
      else if (this.pageContent == "contact-music")
      {
          this.pageContent = "booking-info";
      }
  }

  contactProvider()
  {
      this.pageContent = "contact-music";
      console.log("show contact form please");
  }

  sendMessage()
  {
      this.pageContent = "booking-info";
  }
}
