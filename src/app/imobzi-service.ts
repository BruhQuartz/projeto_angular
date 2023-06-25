import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ImobziLocation } from './imobzilocation';
import { ImobziApi } from './imobziapi';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root', // <---- Adiciona isto ao serviço
})
export class ImobziService {
    imobziLocations: ImobziLocation[] = [];
    // cursor é o que é retornado para saber a pagina dos imoveis
    cursor: string = '';
    totalItems: number = 0;

    // criar token para guardar sempre a string da key, para caso precisar alterar ela , só alteramos aqui
    token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlyZF9wYXJ0eV9hcHBfaWQiOjc2MTE3NDU3MiwiY3JlYXRlZF9hdCI6IjIwMjItMDMtMDhUMTU6MTI6MjkuMjA0MzczWiIsImlzX3RoaXJkX3BhcnR5X2FjY2VzcyI6dHJ1ZX0.7vp-soYwvq2mwCGbBrMr_02-iAvd9pjDngWHX6QHhqQ';
    http: HttpClient;
    // quando um component é criado, ele pega o http
    constructor(http: HttpClient) {
        this.http = http;
    }
    // verifica se o cursos está diferente de vazio
    hasNextPage(): boolean {
        return this.cursor != null;
    }

    getTotalItems(): number {
        return this.totalItems;
    }

    // vai na api da imobzi e traz todas as propriedades
    getAllLocations(): ImobziLocation[] {
        const headers = new HttpHeaders({
            'X-Imobzi-Secret': this.token
        });
        // param é o cursos para poder carregar outras informações
        let params = new HttpParams();
        if (this.cursor) {
            //se está preenchido ele adiciona na url para a paginação
            params = params.set('cursor', this.cursor);
        }

        // aqui ele monta a requisição do get da url e o imobziapi traz as informações que precisamos
        this.http.get<ImobziApi>('https://api.imobzi.app/v1/properties', {
            headers,
            params
        })
        // subscribe é quem manda as informações para o servidor, manda as informações do get para ter o retorno da imobzi
        .subscribe(data => {
            this.cursor = data.cursor;
            this.totalItems = data.count;
            // pega os imoveis de properties e adiciona no final da lista de imobzilocation
            this.imobziLocations.push(...data.properties);
        });

        return this.imobziLocations;
    }

    getLocationById(property_id: number): Observable<ImobziLocation> {
        const headers = new HttpHeaders({
            'X-Imobzi-Secret': this.token
        });
        // o property_id é uma variável que vai ser puxada pelo getlocationbyid, por isso colocamos o ${}
        return this.http.get<ImobziLocation>(`https://api.imobzi.app/v1/property/${property_id}`, {
            headers,
        });
    }
}
