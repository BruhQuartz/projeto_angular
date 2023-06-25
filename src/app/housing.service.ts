import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HousingLocator } from './housinglocator';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocationList: HousingLocation[] = [];
  housingLocatorList: HousingLocator[] = [];
  httpClient: HttpClient;

  constructor() {
    this.httpClient = inject(HttpClient);
    
  }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.httpClient.get<HousingLocation[]>('https://imobz.in/Gt513FMR_properties');
  }

  getAllHousingLocators(): HousingLocator[] {
    return this.housingLocatorList;
  }

  submitApplication(housingLocator: HousingLocator) {
    // filtra pelo email
    let index = this.housingLocatorList.findIndex(f => f.email == housingLocator.email);

    // se nao encontrar dados
    if (index == -1) {
      //cria uma entrada nova
      this.housingLocatorList.push(housingLocator);
    } else {
      //verifica se a casa selecionada ja esta na lista de interesse da pessoa
      if (this.housingLocatorList[index].houseIds.filter(id => id == housingLocator.houseIds[0]).length == 0) {
        // se nao estiver, adiciona o codigo da casa aos ids
        this.housingLocatorList[index].houseIds.push(...housingLocator.houseIds);
      }
      //se já se inscreveu, faz o aviso
      else {
        alert('Already applyed');
      }
      /////////////////////////////////
    }
  }
}
