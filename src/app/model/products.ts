import { Observable } from "rxjs"

export interface Iproducts{
    pname : string,
    pid : number,
    pStatus : Ipstatus,
    canReturn : number
}

export type Ipstatus = "In-Progress" | "Dispatched" | "Delivered"

export interface IcanDeactivatedComp{
    canDeactive : () => boolean | Promise<boolean> | Observable<boolean>
}