import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-wellness-service',
  templateUrl: './wellness-service.component.html',
  styleUrls: ['./wellness-service.component.scss']
})
export class WellnessServiceComponent implements OnInit {
    pageContent: string = "booking-info";
  constructor(private glob:Globals, public fb: FormBuilder) { }

  ngOnInit() {
  }

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
