// export class CardDetails{
// cardNumber:string;
// name:string;
// expiryDate:string;
// cvv:string;
// email:string;
// constructor(){}
// }

import { Injectable } from '@angular/core';

@Injectable()
export class CardDetails {
    public cardNumber: string;
    public name: string;
    public expiryDate: string;
    public cvv: string;
    public email: string;
    public constructor() { }
}