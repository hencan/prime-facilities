import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { SnackbarService } from '../../../services/snackbar/snackbar.service'

import { LoginService } from '../../../services/login/login.service';
import { HomeService } from '../../../services/home/home.service';
import { UsersService } from '../../../services/users/users.service';
import { BlogService } from '../../../services/blog/blog.service';
import { OurServicesService } from '../../../services/ourServices/our-services.service';
import { ProjectsService } from '../../../services/projects/projects.service';

import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  infoCreator: any = { createdBy: "", createdDate: "", createdHour: "" }

  constructor(
    private fileSaverService: FileSaverService,
    private snackBarService: SnackbarService,
    private loginService: LoginService,
    private homeService: HomeService,
    private usersService: UsersService,
    private blogService: BlogService,
    private ourServices: OurServicesService,
    private projectService: ProjectsService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("configAdmin")
  }

  createAllFile(type: string) {
    if (this.homeService.bdLoaded == true) {
      if (this.usersService.bdLoaded == true) {
        if (this.ourServices.bdLoaded == true) {
          if (this.projectService.bdLoaded == true) {
            if (this.blogService.bdLoaded == true) {
    
              this.infoCreator.createdBy = this.loginService.loggedAs.fname
              this.infoCreator.createdDate = new Date().toLocaleDateString()
              this.infoCreator.createdHour = new Date().toLocaleTimeString()
    
              const text_home = { info: '', home: '' }
              const text_users = { info: '', users: '' }
              const text_services = { info: '', services: '' }
              const text_projects = { info: '', projects: '' }
              const text_blog = { info: '', blog: '' }
              const text_lastest_projects = { info: '', projects: '' }
              const text_lastest_blog = { info: '', blog: '' }
        
              text_home.info = this.infoCreator
              text_home.home = this.homeService.HOME_DATA_SERVICE
  
              text_users.info = this.infoCreator
              text_users.users = this.usersService.USERS_DATA_SERVICE
    
              text_services.info = this.infoCreator
              text_services.services = this.ourServices.OURSERVICES_DATA_SERVICE
    
              text_projects.info = this.infoCreator
              text_projects.projects = this.projectService.PROJECTS_DATA_SERVICE
    
              text_blog.info = this.infoCreator
              text_blog.blog = this.blogService.BLOG_DATA_SERVICE
  
  
              const newtext0 = JSON.stringify(text_home)
              const fileName0 = `database_home.${type}`;
              const fileType0 = this.fileSaverService.genType(fileName0);
              const txtBlob0 = new Blob([newtext0], { type: fileType0 });
              this.fileSaverService.save(txtBlob0, fileName0);
    
              const newtext1 = JSON.stringify(text_users)
              const fileName1 = `database_users.${type}`;
              const fileType1 = this.fileSaverService.genType(fileName1);
              const txtBlob1 = new Blob([newtext1], { type: fileType1 });
              this.fileSaverService.save(txtBlob1, fileName1);
    
              const newtext2 = JSON.stringify(text_services)
              const fileName2 = `database_services.${type}`;
              const fileType2 = this.fileSaverService.genType(fileName2);
              const txtBlob2 = new Blob([newtext2], { type: fileType2 });
              this.fileSaverService.save(txtBlob2, fileName2);
    
              const newtext3 = JSON.stringify(text_projects)
              const fileName3 = `database_projects.${type}`;
              const fileType3 = this.fileSaverService.genType(fileName3);
              const txtBlob3 = new Blob([newtext3], { type: fileType3 });
              this.fileSaverService.save(txtBlob3, fileName3);
    
              const newtext4 = JSON.stringify(text_blog)
              const fileName4 = `database_blog.${type}`;
              const fileType4 = this.fileSaverService.genType(fileName4);
              const txtBlob4 = new Blob([newtext4], { type: fileType4 });
              this.fileSaverService.save(txtBlob4, fileName4);
    
              const temp_proj = this.projectService.PROJECTS_DATA_SERVICE
    
              const temp_blog = this.blogService.BLOG_DATA_SERVICE
    
              for (var i = 0; i < temp_proj; i++) {
                if (temp_proj[i].status == "Excluído") {
                  temp_proj.splice(i, 1)
                }
              }
        
              for (var i = 0; i < temp_proj; i++) {
                if (temp_blog[i].status == "Excluído") {
                  temp_blog.splice(i, 1)
                }
              }
        
              text_lastest_projects.info = this.infoCreator
              text_lastest_projects.projects = temp_proj.slice(0,3)
        
              text_lastest_blog.info = this.infoCreator
              text_lastest_blog.blog = temp_blog.slice(0,3)
  
              const newtext5 = JSON.stringify(text_lastest_blog)
              const fileName5 = `lastestBlog.${type}`;
              const fileType5 = this.fileSaverService.genType(fileName5);
              const txtBlob5 = new Blob([newtext5], { type: fileType5 });
              this.fileSaverService.save(txtBlob5, fileName5);
  
              const newtext6 = JSON.stringify(text_lastest_projects)
              const fileName6 = `lastestProjects.${type}`;
              const fileType6 = this.fileSaverService.genType(fileName6);
              const txtBlob6 = new Blob([newtext6], { type: fileType6 });
              this.fileSaverService.save(txtBlob6, fileName6);
        
            } else {
              this.snackBarService.showMassage('BD Blog não carregado!')
            }
          } else {
            this.snackBarService.showMassage('BD Project não carregado! Verifique também o BD Blog')
          }
        } else {
          this.snackBarService.showMassage('BD Services não carregado! Verifique também o BD Project e Blog')
        }
      } else {
        this.snackBarService.showMassage('BD Users não carregado! Verifique também o BD Service, Project e Blog')
      }
    } else {
      this.snackBarService.showMassage('BD Home não carregado! Verifique também o BD Users, Service, Project e Blog')
    }

  }

  createLastestBD(type: string): void {
    if (this.blogService.bdLoaded == true) {

      this.infoCreator.createdBy = this.loginService.loggedAs.fname
      this.infoCreator.createdDate = new Date().toLocaleDateString()
      this.infoCreator.createdHour = new Date().toLocaleTimeString()

      const text_lastest_projects = { info: '', projects: '' }
      const text_lastest_blog = { info: '', blog: '' }

      const temp_proj = this.projectService.PROJECTS_DATA_SERVICE

      const temp_blog = this.blogService.BLOG_DATA_SERVICE

      for (var i = 0; i < temp_proj; i++) {
        if (temp_proj[i].status == "Excluído") {
          temp_proj.splice(i, 1)
        }
      }

      for (var i = 0; i < temp_proj; i++) {
        if (temp_blog[i].status == "Excluído") {
          temp_blog.splice(i, 1)
        }
      }

      text_lastest_projects.info = this.infoCreator
      // text_projects.projects = temp_proj.slice(-3).reverse()
      text_lastest_projects.projects = temp_proj.slice(0,3)

      text_lastest_blog.info = this.infoCreator
      // text_blog.blog = temp_blog.slice(-3).reverse()
      text_lastest_blog.blog = temp_blog.slice(0,3)

      const newtext4 = JSON.stringify(text_lastest_projects)
      const fileName4 = `lastestProjects.${type}`;
      const fileType4 = this.fileSaverService.genType(fileName4);
      const txtBlob4 = new Blob([newtext4], { type: fileType4 });
      this.fileSaverService.save(txtBlob4, fileName4);

      const newtext5 = JSON.stringify(text_lastest_blog)
      const fileName5 = `lastestBlog.${type}`;
      const fileType5 = this.fileSaverService.genType(fileName5);
      const txtBlob5 = new Blob([newtext5], { type: fileType5 });
      this.fileSaverService.save(txtBlob5, fileName5);
    }
  }



}
