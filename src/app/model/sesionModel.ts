import { OrdenModel } from "./orden";

export class SesionModel{

    id? = ""
    location ?= ""
    ipAddress ?= ""
    orden: OrdenModel = new OrdenModel()
    constructor(){}
}