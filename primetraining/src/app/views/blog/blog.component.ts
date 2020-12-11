import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { BlogService } from '../../services/blog/blog.service';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['imageTitle', 'title'];

  expandedElement: any | null;

  dataSource: any = new MatTableDataSource(this.blogService.BLOG_DATA_SERVICE) // Objeto de dados do componente

  posArray: any = ""

  valueProgress = 0

  constructor(
    private router: Router,
    private title: Title, 
    private blogService: BlogService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('PrimeTraining | Blog');
    if (this.blogService.bdLoaded == false) {
      this.databaseService.getBlog().subscribe(response => {
        this.blogService.BLOG_DATA_SERVICE = response.blog.slice()
        console.log('Banco de dados JSON Blog importado para Blog Service')
        this.dataSource = new MatTableDataSource(this.blogService.BLOG_DATA_SERVICE)
        this.blogService.bdLoaded = true
        console.log('Banco de dados JSON Blog importado para Blog Component')
        this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
        this.dataSource.paginator = this.paginator; // Paginação da planilha
        this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Blog Service')
      this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
      this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
      this.dataSource.paginator = this.paginator; // Paginação da planilha
      this.valueProgress = 100
    }
  }

  applyFilter(event: Event) { // Filtro dinamico na tela da tabela
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterOnInitTable() { // Filtro estatico para gerar visualização inicial da tabela
    const filterValue = "Ativo"
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  buttonRead(element): void {
    console.log('***')
    console.log('Blog | Botão ver clicado')
    console.log('Início dos processos do botão ver')
    // console.log(this.blogService.BLOG_DATA_SERVICE)
    for (var i = 0; i < this.blogService.BLOG_DATA_SERVICE.length; i++) {
      if (this.blogService.BLOG_DATA_SERVICE[i].id == element.id) {
        this.posArray = i
        break
      }
    }
    // console.log(element.id)
    // console.log(this.posArray)
    console.log('-> Atribuição do nº de ID na variável PosArray')
    this.blogService.readData(this.posArray)
    console.log('-> Chamada função readUpdateData no Blog Service')
    this.router.navigate(['blog/read'])
    window.scrollTo(0, 0)
    console.log('-> Router para página de Dados do Post')
    console.log('Fim do processo do botão ver')
    console.log('***')
  }

}
