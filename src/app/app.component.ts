import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
  sidebarExpanded = false;
  challengeEnabled = false;
  toggleChallenge = () => this.challengeEnabled = !this.challengeEnabled;
  
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon("imobzi", this.domSanitizer.bypassSecurityTrustResourceUrl ('assets/imobzi-mascot-white.svg'));
  }
}


