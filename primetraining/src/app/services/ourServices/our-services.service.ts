import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  OURSERVICES_DATA_SERVICE: any = []

  OURSERVICES_READ_UPDATE: any = []

  bdLoaded = false

  constructor() { }

  createData(a): void {
    this.OURSERVICES_DATA_SERVICE.push(a)
  }

  readData(a): void {
    this.OURSERVICES_READ_UPDATE = this.OURSERVICES_DATA_SERVICE[a]
  }

  updateData(a): void {
    this.OURSERVICES_READ_UPDATE = this.OURSERVICES_DATA_SERVICE[a]
  }

  deleteData(a): void {
    this.OURSERVICES_DATA_SERVICE[a].status = "Excluído"
  }
}
