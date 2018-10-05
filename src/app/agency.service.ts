import { Injectable } from '@angular/core';
import { Agency } from './Agency';
import {Agencies } from './Agency-Detail';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor() { }

  getAgencies(): Observable<Agency[]> {
    return of(Agencies);
  }

  getAgency(id: number): Observable<Agency> {
  return of (Agencies.find(age => age.id === id));
  }

}
