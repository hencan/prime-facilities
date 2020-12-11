import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatabaseService } from '../../services/database/database.service';
import { HomeService } from '../../services/home/home.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  images: any = []

  storeData: any = { qs_title: "", qs_text: "", diferenciais_text: "", missao_text: "", visao_text: "", ns_title: "", ns_text: "", box_title1: "", box_text1: "", box_title2: "", box_text2: "", contact_address: "", contact_site: "", contact_email1: "", contact_email2: "", contact_email3: "", contact_telFixo: "", contact_cel1: "", contact_cel2: "", contact_cel3: "" }

  valueProgress = 0

  constructor(
    private title: Title,
    private databaseService: DatabaseService,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('PrimeTraining | Contato');
    this.databaseService.getImages().subscribe(response => {
      this.images = response
      // console.log(this.logos)
    })
    if (this.homeService.bdLoaded == false) {
      this.databaseService.getHome().subscribe(response => {
        this.homeService.HOME_DATA_SERVICE = response.home
        console.log('Banco de dados JSON Home importado para Home Service')
        this.homeService.bdLoaded = true
        console.log('Banco de dados JSON Home importado para Contact Component')
        this.storeData = this.homeService.HOME_DATA_SERVICE
        // this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Home Service')
      this.storeData = this.homeService.HOME_DATA_SERVICE
      // this.valueProgress = 100
    }

  }

}
