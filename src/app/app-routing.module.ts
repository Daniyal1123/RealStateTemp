import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home/home.component';
import { AgenciesDetailComponent } from './agencies-detail/agencies-detail.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyComponent } from './property/property.component';
import {  AgentProfileComponent } from './agent-profile/agent-profile.component'

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Agencies', component: AgenciesComponent },
  { path: 'detail/:id', component: AgenciesDetailComponent },
  { path: 'Home', component: HomeComponent },
  {path: 'detail/:id/Property', component : PropertyComponent},
  {path: 'detail/:id/Agent', component : AgentProfileComponent},
  { path: 'Contact', component: ContactComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
