import { Component, inject, Input, } from "@angular/core";
import { HousingService } from "../housing.service";

@Component({
    templateUrl: './contacts.component.html',
})

export class ContactsComponent {
    housingService = inject(HousingService);
    locators = this.housingService.getAllHousingLocators();
}