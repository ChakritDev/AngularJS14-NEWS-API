import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  baseUri:string='http://dev-sw6-uapi.ecm.in.th/';
  constructor() { }
}
