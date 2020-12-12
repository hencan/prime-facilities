import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  HOME_DATA_SERVICE: any = []

  bdLoaded = false

  constructor() { }
}
