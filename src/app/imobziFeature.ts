import { ImobziGenericData } from "./imobzi-generic-data";

export interface ImobziFeature{
    Outros: ImobziGenericData[]
    //imovel com acento em código
    Im\u00f3vel: ImobziGenericData[]
    Proximidades: ImobziGenericData[]
    ['\u00c1reas Comuns']: ImobziGenericData[]
}