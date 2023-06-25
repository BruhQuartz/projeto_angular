import { CoverPhoto } from "./cover-photo";
import { ImobziFeature } from "./imobziFeature";
import { ImobziOwner } from "./imobzi-owner";

export interface ImobziLocation{
    address: string;
    city: string;
    state: string;
    db_id: string;
    rental_value: number;
    sale_value: number;
    useful_area: number;
    area: number;
    cover_photo: CoverPhoto;
    features: ImobziFeature;
    neighborhood: string;
    code: number;
    owners: ImobziOwner[];
}