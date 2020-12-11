import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WidgetsService } from '../../services/widgets/widgets.service';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-widgets-projects',
  templateUrl: './widgets-projects.component.html',
  styleUrls: ['./widgets-projects.component.css']
})
export class WidgetsProjectsComponent implements OnInit {

  projects: any 

  valueProgress = 0

  constructor(
    private router: Router,
    private widgetsService: WidgetsService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    if (this.widgetsService.lastest_projects_Loaded == false) {
      this.databaseService.getLastestProjects().subscribe(response => {
        this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE = response.projects.slice()
        console.log('Banco de dados JSON Projects importado para Widget Service')
        this.widgetsService.lastest_projects_Loaded = true
        console.log('Banco de dados JSON Lastest Projects importado para Widget Component')
        this.valueProgress = 100
        this.projects = this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      this.valueProgress = 100
      this.projects = this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE
    }
  }


  buttonRead(element): void {
    console.log('Início dos processos do botão ver')
    this.router.navigate(['projects'])
    console.log(element.title)
    
    console.log('-> Router para página de Dados do Post')
    console.log('Fim do processo do botão ver')
  }

  goTo3(id:string): void {
    this.router.navigate(["projects"]).then( res => {
      setTimeout(function(){
        window.scrollTo(0, 0)
      var test = document.getElementById(id).getBoundingClientRect()
      window.scroll({
        top: (test.top - 100),
        behavior: 'smooth'
      })
      }, 200); 
    }
    )
  }


  goTo(route: string): void {
    this.router.navigate([route])
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

}
