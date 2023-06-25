import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ImobziHousingLocationComponent } from './imobzi-housing-location/imobzi-housing-location.component';
import {ImobziPropertiesComponent} from './imobzi-properties/imobzi-properties.component';
import { ImobziDetailsComponent } from './imobzi-details/imobzi-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HousingLocationComponent } from './housing-location/housing-location.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import {ContactsCardComponent} from './contactcard/contact-card.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    HousingLocationComponent,
    SidebarComponent,
    ContactsCardComponent,
    ContactsComponent,
    ImobziHousingLocationComponent,
    ImobziPropertiesComponent,
    ImobziDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  
  ],
  exports: [MatProgressSpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
