import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Agency } from '../Agency';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
  age : Agency ;

  constructor(
    private route: ActivatedRoute,
     private AgencyService: AgencyService,
    private location: Location
  ) {}

    ngOnInit() {
      this.getAgency();
        }

    getAgency(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.AgencyService.getAgency(id)
       .subscribe(age => this.age = age);
   }

}
