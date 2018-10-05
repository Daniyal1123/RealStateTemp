import { Component, OnInit } from '@angular/core';
import { Agency } from '../Agency';
import { Agencies } from '../Agency-Detail';
import { AgencyService } from '../agency.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Agencies : Agency[] ;

   constructor(private AgencyService: AgencyService) { }

   ngOnInit() {
     this.getAgencies();
   }
   getAgencies(): void {
      this.AgencyService.getAgencies()
          .subscribe(Agencies => this.Agencies = Agencies.slice(0,3));
    }


}
