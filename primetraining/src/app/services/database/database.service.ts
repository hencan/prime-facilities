import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlToHome = 'assets/database_home.json'

  urlToUsers = 'assets/database_users.json'

  urlToServices = 'assets/database_services.json'

  urlToProjects = 'assets/database_projects.json'

  urlToBlog = 'assets/database_blog.json'

  urlToLastestBlog = 'assets/lastestBlog.json'

  urlToLastestProjects = 'assets/lastestProjects.json'

  urlToImages = 'assets/images.json'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getHome(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToHome)
  }

  getUsers(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToUsers)
  }

  getServices(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToServices)
  }

  getProjects(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToProjects)
  }

  getBlog(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToBlog)
  }

  getLastestBlog(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToLastestBlog)
  }

  getLastestProjects(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToLastestProjects)
  }

  getImages(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToImages)
  }
}
