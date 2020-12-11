import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { OurServicesService } from '../../../services/ourServices/our-services.service';
import { DatabaseService } from '../../../services/database/database.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrls: ['./services-admin.component.css']
})
export class ServicesAdminComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'imageTitle', 'title', 'categories', 'situation', 'modifiedBy', 'modifiedIn'];

  dataSource: any = new MatTableDataSource(this.ourService.OURSERVICES_DATA_SERVICE) // Objeto de dados do componente

  posArray: any = ""

  constructor(
    private router: Router, 
    private ourService: OurServicesService,
    private databaseService: DatabaseService,
    private authenticationService: AuthenticationService,
  ) { };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.authenticationService.authentication("ourservicesAdmin")   
    if (this.ourService.bdLoaded == false) {
      this.databaseService.getServices().subscribe(response => {
        this.ourService.OURSERVICES_DATA_SERVICE = response.services
        console.log('Banco de dados JSON Services importado para Projects Service')
        this.dataSource = new MatTableDataSource(this.ourService.OURSERVICES_DATA_SERVICE)
        this.ourService.bdLoaded = true
        console.log('Banco de dados JSON Services importado para Projects Component')
        this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
        this.dataSource.paginator = this.paginator; // Paginação da planilha
        this.dataSource.sort = this.sort;
      })
    } else {
      console.log('Utilizando BD do Services Service')
    }
    this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
    this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
    this.dataSource.paginator = this.paginator; // Paginação da planilha
    this.dataSource.sort = this.sort;
    
    // this.accessControl.accessControlAdmin("authUsersPage") // Função de autorização da página
  };

  buttonCreate(): void {
    console.log('***')
    console.log('Botão criar clicado')
    console.log('Início dos processos do botão criar')
    this.router.navigate(['admin/ourservices/create'])
    console.log('-> Router para página de Cadastrar Post')
    console.log('Fim do processo do botão criar')
    console.log('***')
  };

  buttonRead(element): void {
    console.log('***')
    console.log('Botão ver clicado')
    console.log('Início dos processos do botão ver')
    for (var i = 0; i < this.ourService.OURSERVICES_DATA_SERVICE.length; i++) {
      if (this.ourService.OURSERVICES_DATA_SERVICE[i].id == element.id) {
        this.posArray = i
        break
      }
    }
    console.log('-> Atribuição do nº de ID na variável id')
    this.ourService.readData(this.posArray)
    console.log('-> Chamada função readUpdateData no Blog Service')
    this.router.navigate(['admin/ourservices/read'])
    console.log('-> Router para página de Dados do Post')
    console.log('Fim do processo do botão ver')
    console.log('***')
  }

  buttonUpdate(id): void {
    console.log('***')
    console.log('Blog | Botão editar clicado')
    console.log('Início dos processos do botão editar')
    for (var i = 0; i < this.ourService.OURSERVICES_DATA_SERVICE.length; i++) {
      if (this.ourService.OURSERVICES_DATA_SERVICE[i].id == id) {
        this.posArray = i
        break
      }
    }
    this.ourService.updateData(this.posArray)
    console.log('-> Chamada função readUpdateData no Blog Service')
    this.router.navigate(['admin/ourservices/update'])
    console.log('-> Router para página de Blog Admin Usuário')
    console.log('Fim do processo do botão editar')
    console.log('***')
  }

  buttonDelete(element): void {
    console.log('***')
    console.log('Blog | Botão excluir clicado')
    console.log('Início dos processos do botão excluir')
    for (var i = 0; i < this.ourService.OURSERVICES_DATA_SERVICE.length; i++) {
      if (this.ourService.OURSERVICES_DATA_SERVICE[i].id == element.id) {
        this.posArray = i
        break
      }
    }
    console.log('-> Atribuição do nº de ID na variável id')
    this.ourService.readData(this.posArray)
    console.log('-> Chamada função readUpdateData no Blog Service')
    this.router.navigate(['admin/ourservices/delete'])
    console.log('-> Router para página de Blog Admin Usuário')
    console.log('Fim do processo do botão excluir')
    console.log('***')
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
