import { ImobziLocation } from "./imobzilocation";

export interface ImobziApi {
    count: number;
    cursor:string;
    properties: ImobziLocation[];
}