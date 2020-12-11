import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../../services/blog/blog.service';
import { WidgetsService } from '../../services/widgets/widgets.service';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-widgets-blog',
  templateUrl: './widgets-blog.component.html',
  styleUrls: ['./widgets-blog.component.css']
})
export class WidgetsBlogComponent implements OnInit {

  displayedColumns: string[] = ['imageTitle', 'title'];

  blog: any

  posArray: any = ""
  
  valueProgress = 0

  constructor(
    private router: Router,
    private blogService: BlogService,
    private widgetsService: WidgetsService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    if (this.widgetsService.lastest_blog_Loaded == false) {
      this.databaseService.getLastestBlog().subscribe(response => {
        this.widgetsService.LASTEST_BLOG_DATA_SERVICE = response.blog.slice()
        console.log('Banco de dados JSON Blog importado para Blog Service')
        // this.dataSource = new MatTableDataSource(this.widgetsService.LASTEST_BLOG_DATA_SERVICE)
        this.widgetsService.lastest_blog_Loaded = true
        console.log('Banco de dados JSON Lastest Blog importado para Widget Component')
        // this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.valueProgress = 100
        this.blog = this.widgetsService.LASTEST_BLOG_DATA_SERVICE
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      // this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
      this.valueProgress = 100
      this.blog = this.widgetsService.LASTEST_BLOG_DATA_SERVICE
    }
  }


  buttonRead(element): void {
    if (this.blogService.bdLoaded == false) {
      this.databaseService.getBlog().subscribe(response => {
        this.blogService.BLOG_DATA_SERVICE = response.blog.slice()
        console.log('Banco de dados JSON Blog importado para Blog Service')
        this.blogService.bdLoaded = true
        for (var i = 0; i < this.blogService.BLOG_DATA_SERVICE.length; i++) {
          if (this.blogService.BLOG_DATA_SERVICE[i].id == element.id) {
            this.posArray = i
            this.blogService.readData(this.posArray)
            this.router.navigate(['blog/read'])
            window.scrollTo(0, 0)        
            break
          }
        }
        this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Blog Service')
      this.valueProgress = 100
      for (var i = 0; i < this.blogService.BLOG_DATA_SERVICE.length; i++) {
        if (this.blogService.BLOG_DATA_SERVICE[i].id == element.id) {
          this.posArray = i
          this.blogService.readData(this.posArray)
          this.router.navigate(['blog/read'])
          window.scrollTo(0, 0)      
          break
        }
      }
    }
  }

}
