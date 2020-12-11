import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../../services/home/home.service';
import { DatabaseService } from '../../services/database/database.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any = []

  storeData: any = { qs_title: "", qs_text: "", diferenciais_text: "", missao_text: "", visao_text: "", ns_title: "", ns_text: "", box_title1: "", box_text1: "", box_title2: "", box_text2: "", contact_address: "", contact_site: "", contact_email1: "", contact_email2: "", contact_email3: "", contact_telFixo: "", contact_cel1: "", contact_cel2: "", contact_cel3: ""}

  valueProgress = 0

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private homeService: HomeService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.databaseService.getImages().subscribe(response => {
      this.images = response
    })
    if (this.homeService.bdLoaded == false) {
      this.databaseService.getHome().subscribe(response => {
        this.homeService.HOME_DATA_SERVICE = response.home
        console.log('Banco de dados JSON Home importado para Info Service')
        this.homeService.bdLoaded = true
        console.log('Banco de dados JSON Home importado para Info Component')
        this.storeData = this.homeService.HOME_DATA_SERVICE
        this.storeData = JSON.parse(JSON.stringify(this.storeData))
        this.storeData.qs_text = this.sanitizer.bypassSecurityTrustHtml(this.storeData.qs_text)
        this.storeData.ns_text = this.sanitizer.bypassSecurityTrustHtml(this.storeData.ns_text)  
        this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Home Service')
      this.storeData = this.homeService.HOME_DATA_SERVICE
      this.storeData = JSON.parse(JSON.stringify(this.storeData))
      this.storeData.qs_text = this.sanitizer.bypassSecurityTrustHtml(this.storeData.qs_text)
      this.storeData.ns_text = this.sanitizer.bypassSecurityTrustHtml(this.storeData.ns_text)  
      this.valueProgress = 100
  }

  }

  goTo(id:string): void {
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
  }

  goTo2(route: string): void {
    this.router.navigate([route])
    window.scrollTo(0, 0)
  }


}
