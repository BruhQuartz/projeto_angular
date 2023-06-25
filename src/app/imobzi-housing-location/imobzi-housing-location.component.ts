import { Component, Input } from "@angular/core";
import { ImobziLocation } from "../imobzilocation";

@Component({
    selector: 'app-imobzi-housing-location',
    templateUrl: `./imobzi-housing-location.component.html`,
    styleUrls: ['./imobzi-housing-location.component.css'],
  })

export class ImobziHousingLocationComponent{
    photoNotFound = 'https://my.imobzi.com/assets/images/image-not-found.png';

    @Input() housingLocation!: ImobziLocation;
}