import { Component, OnInit } from '@angular/core';
import { WellnessServiceComponent } from '../wellness-service/wellness-service.component';
import { Globals } from '../globals.service'

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {

  constructor(private glob:Globals) { }
  ngOnInit() {
  }

  wellnessClick()
  {
      this.glob.serviceSelected = true;
      if (this.glob.serviceSelected)
      {
          console.log("going TO wellness service");
      }
      else
      {
          console.log("this is not supposed to happend (TO wellness)");
      }
  }

}
