import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS_DATA_SERVICE: any = []

  USERS_READ_UPDATE: any = []

  bdLoaded = false

  constructor() { }

  createData(a): void {
    this.USERS_DATA_SERVICE.push(a)
  }

  readData(a): void {
    this.USERS_READ_UPDATE = this.USERS_DATA_SERVICE[a]
  }

  updateData(a): void {
    this.USERS_READ_UPDATE = this.USERS_DATA_SERVICE[a]
  }

  deleteData(a): void {
    this.USERS_DATA_SERVICE[a].status = "Excluído"
  }

}
