import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { LoginService } from '../../../services/login/login.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { OurServicesService } from '../../../services/ourServices/our-services.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-services-admin-update',
  templateUrl: './services-admin-update.component.html',
  styleUrls: ['./services-admin-update.component.css']
})
export class ServicesAdminUpdateComponent implements OnInit {

  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '', content: '', situation: '', status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: ''  }

  photoBase64: any = ''

  hide = true

  imageChangedEvent: any = ''

  croppedImage: any = ''

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
    private loginService: LoginService,
    private snackBarService: SnackbarService,
    private ourServices: OurServicesService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("ourservicesAdminUpdate")   
    this.storeData = this.ourServices.OURSERVICES_READ_UPDATE
    this.photoBase64 = this.storeData.imageTitle
  }

  updatePost(): void {
    this.storeData.imageTitle = this.photoBase64
    this.storeData.modifiedBy = this.loginService.loggedAs.fname.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.situation = 'Postado'
    // console.log(this.storeData)
    this.snackBarService.showMassage('Atualização feita com sucesso!')
    this.router.navigate(['admin/ourservices'])
  }

  updateDraft(): void {
    this.storeData.imageTitle = this.photoBase64
    this.storeData.modifiedBy = this.loginService.loggedAs.fname.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.situation = 'Rascunho'
    // console.log(this.storeData)
    this.snackBarService.showMassage('Atualização feita com sucesso!')
    this.router.navigate(['admin/ourservices'])
  }

  cancel(): void {
    console.log('Botão cancelar clicado')
    console.log('Início dos processos do botão cancelar')
    this.snackBarService.showMassage('Operação cancelada!')
    console.log('-> Snackbar da mensagem de sucesso')
    this.router.navigate(['admin/ourservices'])
    console.log('-> Router para página de Serviços')
    console.log('Fim do processo do botão cancelar')
  }

  // Image Cropper Functions
  fileChangeEvent(event: any): void {
    console.log('Botão Chance Image clicado')
    console.log('Início dos processos do botão Change Image')
    document.getElementById('createPhotoFinal').style.display = 'none'
    document.getElementById('createPhotoChange').style.display = 'block'
    this.imageChangedEvent = event
    console.log('Término dos processos do botão Change Image')
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  saveImageCroppie(): void {
    console.log('Botão Save Image clicado')
    console.log('Início dos processos do botão Save Image')
    this.photoBase64 = this.croppedImage
    this.croppedImage = ''
    this.imageChangedEvent = ''
    document.getElementById('createPhotoFinal').style.display = 'block'
    document.getElementById('createPhotoChange').style.display = 'none'
    console.log('Término dos processos do botão Save Image')
  }
  cancelImageCroppie(): void {
    console.log('Users-Create | Botão Cancel Image clicado')
    console.log('Início dos processos do botão Cancel Image')
    this.croppedImage = ''
    this.imageChangedEvent = ''
    document.getElementById('createPhotoFinal').style.display = 'block'
    document.getElementById('createPhotoChange').style.display = 'none'
    console.log('Término dos processos do botão Cancel Image')

  }

}
