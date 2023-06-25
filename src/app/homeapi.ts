import { HousingLocation } from './housinglocation';

export interface HomeApi {
    count: number;
    cursor:string;
    properties: HousingLocation[];
}