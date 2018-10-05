import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AgenciesDetailComponent } from './agencies-detail/agencies-detail.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyComponent } from './property/property.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    HomeComponent,
    AgenciesDetailComponent,
    ContactComponent,
    PropertyComponent,
    AgentProfileComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
