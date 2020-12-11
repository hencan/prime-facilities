import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { LoginService } from '../../../services/login/login.service';
import { DatabaseService } from '../../../services/database/database.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { HomeService } from '../../../services/home/home.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  storeData: any = {
    qs_title: "",
    qs_text: "",
    diferenciais_text: "",
    missao_text: "",
    visao_text: "",
    ns_title: "",
    ns_text: "",
    box_title1: "",
    box_text1: "",
    box_title2: "",
    box_text2: "",
    contact_address: "",
    contact_site: "",
    contact_email1: "",
    contact_email2: "",
    contact_email3: "",
    contact_telFixo: "",
    contact_cel1: "",
    contact_cel2: "",
    contact_cel3: ""
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '5rem',
    placeholder: 'Digite o texto aqui...',
    translate: 'no',
    defaultParagraphSeparator: 'div',
    defaultFontName: '',
    defaultFontSize: '',
    sanitize: false,
    fonts: [
      {class: 'Roboto', name: 'Roboto'},
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
    ],
    outline: false,
    uploadWithCredentials: false,
    toolbarPosition: 'top',
    customClasses: [
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
    toolbarHiddenButtons: [
      [
        // 'undo',
        // 'redo',
        // 'bold',
        // 'italic',
        // 'underline',
        'strikeThrough',
        // 'subscript',
        // 'superscript',
        // 'justifyLeft',
        // 'justifyCenter',
        // 'justifyRight',
        // 'justifyFull',
        // 'indent',
        // 'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        // 'customClasses',
        'link',
        'unlink',
        // 'insertImage',
        'insertVideo',
        // 'insertHorizontalRule',
        // 'removeFormat',
        // 'toggleEditorMode'
      ]
    ]
  }


  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private homeService: HomeService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("homeAdmin")
    if (this.homeService.bdLoaded == false) {
      this.databaseService.getHome().subscribe(response => {
        this.homeService.HOME_DATA_SERVICE = response.home
        console.log('Banco de dados JSON Home importado para Info Service')
        this.homeService.bdLoaded = true
        console.log('Banco de dados JSON Home importado para Info Component')
        this.storeData = this.homeService.HOME_DATA_SERVICE
        // console.log(this.storeData)
      })
    } else {
      console.log('Utilizando BD do Home Service')
      this.storeData = this.homeService.HOME_DATA_SERVICE
    }
  }

}
