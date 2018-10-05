import { Component, OnInit } from '@angular/core';
import { Agency } from '../Agency';
import { Agencies } from '../Agency-Detail';
import { AgencyService } from '../agency.service';



@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
 Agencies : Agency[] ;

  constructor(private AgencyService: AgencyService) { }

  ngOnInit() {
    this.getAgencies();
  }
  getAgencies(): void {
     this.AgencyService.getAgencies()
         .subscribe(Agencies => this.Agencies = Agencies);
   }

}
