import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',

  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css'],

})

export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations()
      .subscribe(data => {
        this.housingLocationList = data;
        this.filteredLocationList = this.housingLocationList;
      })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city?.toLowerCase().includes(text.toLowerCase())
    );
  }
}