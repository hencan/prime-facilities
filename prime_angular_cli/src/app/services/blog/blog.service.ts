import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  BLOG_DATA_SERVICE: any = []

  BLOG_READ_UPDATE: any = []

  bdLoaded = false

  constructor() { }

  createData(a): void {
    this.BLOG_DATA_SERVICE.unshift(a)
  }

  readData(a): void {
    this.BLOG_READ_UPDATE = this.BLOG_DATA_SERVICE[a]
  }

  updateData(a): void {
    this.BLOG_READ_UPDATE = this.BLOG_DATA_SERVICE[a]
  }

  deleteData(a): void {
    this.BLOG_DATA_SERVICE[a].status = "Excluído"
  }
}
