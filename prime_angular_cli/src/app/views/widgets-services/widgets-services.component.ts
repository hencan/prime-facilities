import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WidgetsService } from '../../services/widgets/widgets.service';
import { DatabaseService } from '../../services/database/database.service';


@Component({
  selector: 'app-widgets-services',
  templateUrl: './widgets-services.component.html',
  styleUrls: ['./widgets-services.component.css']
})
export class WidgetsServicesComponent implements OnInit {

  services: any 

  valueProgress = 0

  constructor(
    private router: Router,
    private widgetsService: WidgetsService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    if (this.widgetsService.ourService_OurServices_Loaded == false) {
      this.databaseService.getServices().subscribe(response => {
        this.widgetsService.OURSERVICES_DATA_SERVICE = response.services.slice()
        console.log('Banco de dados JSON Services importado para Widget Service')
        this.widgetsService.ourService_OurServices_Loaded = true
        console.log('Banco de dados JSON Lastest Services importado para Widget Component')
        this.services = this.widgetsService.OURSERVICES_DATA_SERVICE
        this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      this.services = this.widgetsService.OURSERVICES_DATA_SERVICE
      this.valueProgress = 100
    }
  }


  goTo3(id:string): void {
    this.router.navigate(["services"]).then( res => {
      setTimeout(function(){
        window.scrollTo(0, 0)
      var test = document.getElementById(id).getBoundingClientRect()
      // console.log(test.top)
      window.scroll({
        top: (test.top - 100),
        behavior: 'smooth'
      })
      }, 200); 
    }
    )
  }

}
