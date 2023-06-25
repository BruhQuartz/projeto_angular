
import { Component, inject, OnInit } from "@angular/core";
import { ImobziService } from "../imobzi-service";
import { ImobziLocation } from "../imobzilocation";


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
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }



}