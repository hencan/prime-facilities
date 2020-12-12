import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  OURSERVICES_DATA_SERVICE: any = []

  LASTEST_BLOG_DATA_SERVICE: any = []

  LASTEST_PROJECTS_DATA_SERVICE: any = []

  ourService_OurServices_Loaded = false

  lastest_blog_Loaded = false

  lastest_projects_Loaded = false

  constructor() { }
}
