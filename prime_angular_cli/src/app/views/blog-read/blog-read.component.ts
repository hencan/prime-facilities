import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BlogService } from '../../services/blog/blog.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
// import { MembersService } from '../../services/members/members.service';
import { DatabaseService } from '../../services/database/database.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-blog-read',
  templateUrl: './blog-read.component.html',
  styleUrls: ['./blog-read.component.css']
})
export class BlogReadComponent implements OnInit {

  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '', paragraf1: '', paragraf2: '', paragraf3: '', paragraf4: '', paragraf5: '', situation: '', status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: '' }

  photoBase64: any = ""

  authorData: any = ""

  constructor(
    private router: Router,
    private title: Title,
    private blogService: BlogService,
    private snackBarService: SnackbarService,
    private sanitizer: DomSanitizer,
    // private membersService: MembersService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    if (this.blogService.bdLoaded) {

      this.storeData = this.blogService.BLOG_READ_UPDATE
      this.storeData = JSON.parse(JSON.stringify(this.storeData))
      this.storeData.paragraf1 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf1)
      this.storeData.paragraf2 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf2)
      this.storeData.paragraf3 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf3)
      this.storeData.paragraf4 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf4)
      this.storeData.paragraf5 = this.sanitizer.bypassSecurityTrustHtml(this.storeData.paragraf5)

      this.photoBase64 = this.storeData.imageTitle

      this.title.setTitle('PrimeTraining | Blog - Post ' + this.storeData.id + ' - ' + this.storeData.title);
      // this.findAuthor()
    } else {
      console.log('Retornando a blog')
      this.router.navigate(['blog'])
      window.scrollTo(0, 0)
    }
  }

  cancel(): void {
    console.log('Retornando a blog')
    // this.snackBarService.showMassage('Voltando')
    this.router.navigate(['blog'])
    window.scrollTo(0, 0)
  }

  share(): void {
    console.log('Compartilhando o post')
    this.snackBarService.showMassage('Funcionamento não disponível, botão em construção!')
    // this.router.navigate(['blog'])
    // window.scrollTo(0, 0)
  }

}
