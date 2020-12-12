import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { OurServicesService } from '../../../services/ourServices/our-services.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-services-admin-read',
  templateUrl: './services-admin-read.component.html',
  styleUrls: ['./services-admin-read.component.css']
})
export class ServicesAdminReadComponent implements OnInit {

  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '', content: '', situation: '', status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: ''  }

  photoBase64: any

  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: false,
    height: '20rem',
    minHeight: '5rem',
    placeholder: '',
    translate: 'no',
    // defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    defaultFontSize: '3',
    sanitize: false,
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    outline: true,
    uploadWithCredentials: false,
    enableToolbar: false,
    showToolbar: false,
    toolbarPosition: 'top',
    // customClasses: [
    //   {
    //     name: "quote",
    //     class: "quote",
    //   },
    //   {
    //     name: 'redText',
    //     class: 'redText'
    //   },
    //   {
    //     name: "titleText",
    //     class: "titleText",
    //     tag: "h1",
    //   },
    // ],
    toolbarHiddenButtons: [
      // ['bold']
    ]
  }

  constructor(
    private router: Router,
    private ourService: OurServicesService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("ourservicesAdminRead")   
    this.storeData = this.ourService.OURSERVICES_READ_UPDATE
    this.photoBase64 = this.storeData.imageTitle
  }

  cancel(): void {
    console.log('Retornando a admin/ourservices')
    // this.showMassage('Operação cancelada!')
    this.router.navigate(['admin/ourservices'])
  }

}
