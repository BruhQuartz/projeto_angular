import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ImobziPropertiesComponent } from './imobzi-properties/imobzi-properties.component';
import { ImobziDetailsComponent } from './imobzi-details/imobzi-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    title: 'Contacts details'
  },
  {
    path: 'properties',
    component: ImobziPropertiesComponent,
    title: 'Properties details'
  },
  {
    path: 'imobzidetails/:id',
    component: ImobziDetailsComponent,
    title: 'Imobzi home details'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
