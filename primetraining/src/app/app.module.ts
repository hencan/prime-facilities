import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Navegação
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogReadComponent } from './views/blog-read/blog-read.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { WidgetsBlogComponent } from './views/widgets-blog/widgets-blog.component';
import { WidgetsProjectsComponent } from './views/widgets-projects/widgets-projects.component';
// Admin Pages
import { AdminComponent } from './views/admin/admin/admin.component';
import { BlogAdminComponent } from './views/admin/blog-admin/blog-admin.component';
import { BlogAdminCreateComponent } from './views/admin/blog-admin-create/blog-admin-create.component';
import { BlogAdminReadComponent } from './views/admin/blog-admin-read/blog-admin-read.component';
import { BlogAdminUpdateComponent } from './views/admin/blog-admin-update/blog-admin-update.component';
import { BlogAdminDeleteComponent } from './views/admin/blog-admin-delete/blog-admin-delete.component';
import { ConfigComponent } from './views/admin/config/config.component';
import { ProjectsAdminComponent } from './views/admin/projects-admin/projects-admin.component';
import { ProjectsAdminCreateComponent } from './views/admin/projects-admin-create/projects-admin-create.component';
import { ProjectsAdminReadComponent } from './views/admin/projects-admin-read/projects-admin-read.component';
import { ProjectsAdminUpdateComponent } from './views/admin/projects-admin-update/projects-admin-update.component';
import { ProjectsAdminDeleteComponent } from './views/admin/projects-admin-delete/projects-admin-delete.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { UsersAdminCreateComponent } from './views/admin/users-admin-create/users-admin-create.component';
import { UsersAdminReadComponent } from './views/admin/users-admin-read/users-admin-read.component';
import { UsersAdminUpdateComponent } from './views/admin/users-admin-update/users-admin-update.component';
import { UsersAdminDeleteComponent } from './views/admin/users-admin-delete/users-admin-delete.component';

//Funcionalidades
import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Imports para funcionar os formulários Angular/Material
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Imports para funcionar os tabelas Angular/Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

//Funcionalidade para CRUD e Import de JSON
import { HttpClientModule } from '@angular/common/http';


// Image Cropper
import {ImageCropperModule} from 'ngx-image-cropper';

// FileSaver
import {FileSaverModule} from 'ngx-filesaver'

// Import Angular Editor
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ServicesComponent } from './views/services/services.component';
import { WidgetsServicesComponent } from './views/widgets-services/widgets-services.component';
import { ServicesAdminComponent } from './views/admin/services-admin/services-admin.component';
import { ServicesAdminCreateComponent } from './views/admin/services-admin-create/services-admin-create.component';
import { ServicesAdminReadComponent } from './views/admin/services-admin-read/services-admin-read.component';
import { ServicesAdminUpdateComponent } from './views/admin/services-admin-update/services-admin-update.component';
import { ServicesAdminDeleteComponent } from './views/admin/services-admin-delete/services-admin-delete.component';
import { HomeAdminComponent } from './views/admin/home-admin/home-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    BlogComponent,
    BlogReadComponent,
    ContactComponent,
    LoginComponent,
    ProjectsComponent,
    WidgetsBlogComponent,
    WidgetsProjectsComponent,
    BlogAdminComponent,
    BlogAdminCreateComponent,
    BlogAdminReadComponent,
    BlogAdminUpdateComponent,
    BlogAdminDeleteComponent,
    ConfigComponent,
    ProjectsAdminComponent,
    ProjectsAdminCreateComponent,
    ProjectsAdminReadComponent,
    ProjectsAdminUpdateComponent,
    ProjectsAdminDeleteComponent,
    UsersAdminComponent,
    UsersAdminCreateComponent,
    UsersAdminReadComponent,
    UsersAdminUpdateComponent,
    UsersAdminDeleteComponent,
    AdminComponent,
    ServicesComponent,
    WidgetsServicesComponent,
    ServicesAdminComponent,
    ServicesAdminCreateComponent,
    ServicesAdminReadComponent,
    ServicesAdminUpdateComponent,
    ServicesAdminDeleteComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonToggleModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    HttpClientModule,

    ImageCropperModule,

    FileSaverModule,

    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
