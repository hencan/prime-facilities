import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ProjectsService } from '../../services/projects/projects.service';
import { DatabaseService } from '../../services/database/database.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ProjectsComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // displayedColumns: string[] = ['imageTitle', 'title', 'details'];
  displayedColumns: string[] = ['imageTitle', 'title'];


  expandedElement: any | null;

  dataSource: any = this.projectsService.PROJECTS_DATA_SERVICE // Objeto de dados do componente

  valueProgress = 0

  constructor(
    private router: Router,
    private title: Title, 
    private projectsService: ProjectsService,
    private databaseService: DatabaseService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('PrimeTraining | Projetos');
    if (this.projectsService.bdLoaded == false) {
      this.databaseService.getProjects().subscribe(response => {
        this.projectsService.PROJECTS_DATA_SERVICE = response.projects.slice()
        this.projectsService.bdLoaded = true
        console.log('Banco de dados JSON Services importado para Services Service')
        this.dataSource = this.projectsService.PROJECTS_DATA_SERVICE
        this.dataSource = JSON.parse(JSON.stringify(this.dataSource))
        this.dataSource = new MatTableDataSource(this.dataSource)
        for (var i = 0; i < this.dataSource.data.length; i++) {
          if (this.dataSource.data[i].status == "Ativo") {
            this.dataSource.data[i].content = this.sanitizer.bypassSecurityTrustHtml(this.dataSource.data[i].content)
          }
        }
        console.log('Banco de dados JSON Services importado para Services Component')
        this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
        this.dataSource.paginator = this.paginator; // Paginação da planilha
        this.valueProgress = 100
      })
    } else {
      console.log('this.dataSource = JSON.parse(JSON.stringify(this.dataSource))')
      this.dataSource = JSON.parse(JSON.stringify(this.dataSource))
      console.log('this.dataSource = new MatTableDataSource(this.dataSource)')
      this.dataSource = new MatTableDataSource(this.dataSource)
      console.log('for bypassSecurityTrustHtml')
      // Prevent Default Sanitizer in Content Field
      for (var i = 0; i < this.dataSource.data.length; i++) {
        if (this.dataSource.data[i].status == "Ativo") {
          this.dataSource.data[i].content = this.sanitizer.bypassSecurityTrustHtml(this.dataSource.data[i].content)
        }
      }
      console.log('Banco de dados JSON Services importado para Services Component')
      console.log('this.table.dataSource = this.dataSource')
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

}
