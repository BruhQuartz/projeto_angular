import { Component, inject, Input, ViewEncapsulation } from "@angular/core";
import { HousingLocator } from "../housinglocator";
import { HousingService } from "../housing.service";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { style } from "@angular/animations";

@Component({
    selector: 'contact-card',
    styleUrls: ['./contact-card.component.css'],
    templateUrl: './contact-card.component.html',

})

export class ContactsCardComponent {
    @Input() housingLocator!: HousingLocator;

    housingService: HousingService = inject(HousingService);
    housingLocations: HousingLocation[] = []

    constructor() {
        this.listHouseData();
    }

    listHouseData() {
        this.housingService.getAllHousingLocations()
            .subscribe(data => {
                const houses = data;

                for (const id of this.housingLocator.houseIds) {
                    const house = houses.find(f => f.id == id);
                    if (house) {
                        this.housingLocations.push(house);
                    }
                }
            });
    }
}