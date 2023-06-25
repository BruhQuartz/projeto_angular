import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingLocator } from '../housinglocator';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const id = Number(this.route.snapshot.params['id']);

    this.housingService.getAllHousingLocations()
      .subscribe(data => {
        this.housingLocation = data.find(f => f.id == id);
      });
  }

  submitApplication() {
    let data: HousingLocator = {
      email: this.applyForm.value.email ?? '',
      firstName: this.applyForm.value.firstName ?? '',
      lastName: this.applyForm.value.lastName ?? '',
      houseIds: [Number(this.route.snapshot.params['id'])]

    }

    this.housingService.submitApplication(data);
    //limpa o formulário após o submit
    this.applyForm.reset();

  }

}

