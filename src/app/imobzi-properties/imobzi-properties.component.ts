
import { Component, inject } from "@angular/core";
import { ImobziService } from "../imobzi-service";
import { ImobziLocation } from "../imobzilocation";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: "my-imobziproperties",
  templateUrl: './imobzi-properties.component.html',
  styleUrls: ['./imobzi-properties.component.css']
})

export class ImobziPropertiesComponent {

  imobziService = inject(ImobziService);
  dados: ImobziLocation[];
  loader = true;

  constructor() {
    this.dados = this.imobziService.getAllLocations();
    this.loader = false;
  }

}