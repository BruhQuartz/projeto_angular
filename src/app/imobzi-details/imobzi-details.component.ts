import { Component, inject, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ImobziService } from "../imobzi-service";
import { ImobziLocation } from "../imobzilocation";

@Component({
    templateUrl: './imobzi-details.component.html',
    styleUrls: ['./imobzi-details.component.css'],
})
export class ImobziDetailsComponent {

    imobziService = inject(ImobziService);
    route = inject(ActivatedRoute);
    imobziLocation?: ImobziLocation;

    photoNotFound = 'https://my.imobzi.com/assets/images/image-not-found.png';

    loader = true;

    constructor() {
        //constructor é o primeiro código a ser executado quando a tela abre
        const id = this.route.snapshot.params['id'];
        //a gente cria a const id e assim que abre a tela, ele chama a api da imobzi e usa a id como parametro para abrir na tela
        this.imobziService.getLocationById(id)
            .subscribe(data => {
                //aqui ele pega os dados da imobzilocation
                this.imobziLocation = data;
                console.log(this.imobziLocation);
                console.log(this.imobziLocation.features);
                this.loader = false;
            });
    }

    
}