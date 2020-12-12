import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Views Routes
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ServicesComponent } from './views/services/services.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogReadComponent } from './views/blog-read/blog-read.component';
import { ContactComponent } from './views/contact/contact.component';
// Admin Routes
import { AdminComponent } from './views/admin/admin/admin.component';
import { HomeAdminComponent } from './views/admin/home-admin/home-admin.component';
import { UsersAdminComponent } from './views/admin/users-admin/users-admin.component';
import { UsersAdminCreateComponent } from './views/admin/users-admin-create/users-admin-create.component';
import { UsersAdminReadComponent } from './views/admin/users-admin-read/users-admin-read.component';
import { UsersAdminUpdateComponent } from './views/admin/users-admin-update/users-admin-update.component';
import { UsersAdminDeleteComponent } from './views/admin/users-admin-delete/users-admin-delete.component';
import { ServicesAdminComponent } from './views/admin/services-admin/services-admin.component';
import { ServicesAdminCreateComponent } from './views/admin/services-admin-create/services-admin-create.component';
import { ServicesAdminReadComponent } from './views/admin/services-admin-read/services-admin-read.component';
import { ServicesAdminUpdateComponent } from './views/admin/services-admin-update/services-admin-update.component';
import { ServicesAdminDeleteComponent } from './views/admin/services-admin-delete/services-admin-delete.component';
import { ProjectsAdminComponent } from './views/admin/projects-admin/projects-admin.component';
import { ProjectsAdminCreateComponent } from './views/admin/projects-admin-create/projects-admin-create.component';
import { ProjectsAdminReadComponent } from './views/admin/projects-admin-read/projects-admin-read.component';
import { ProjectsAdminUpdateComponent } from './views/admin/projects-admin-update/projects-admin-update.component';
import { ProjectsAdminDeleteComponent } from './views/admin/projects-admin-delete/projects-admin-delete.component';
import { BlogAdminComponent } from './views/admin/blog-admin/blog-admin.component';
import { BlogAdminCreateComponent } from './views/admin/blog-admin-create/blog-admin-create.component';
import { BlogAdminReadComponent } from './views/admin/blog-admin-read/blog-admin-read.component';
import { BlogAdminUpdateComponent } from './views/admin/blog-admin-update/blog-admin-update.component';
import { BlogAdminDeleteComponent } from './views/admin/blog-admin-delete/blog-admin-delete.component';
import { ConfigComponent } from './views/admin/config/config.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },

  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "blog/read",
    component: BlogReadComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "admin/home",
    component: HomeAdminComponent
  },

  {
    path: "admin/users",
    component: UsersAdminComponent
  },
  {
    path: "admin/users/create",
    component: UsersAdminCreateComponent
  },
  {
    path: "admin/users/read",
    component: UsersAdminReadComponent
  },
  {
    path: "admin/users/update",
    component: UsersAdminUpdateComponent
  },
  {
    path: "admin/users/delete",
    component: UsersAdminDeleteComponent
  },
  {
    path: "admin/ourservices",
    component: ServicesAdminComponent
  },
  {
    path: "admin/ourservices/create",
    component: ServicesAdminCreateComponent
  },
  {
    path: "admin/ourservices/read",
    component: ServicesAdminReadComponent
  },
  {
    path: "admin/ourservices/update",
    component: ServicesAdminUpdateComponent
  },
  {
    path: "admin/ourservices/delete",
    component: ServicesAdminDeleteComponent
  },
  {
    path: "admin/projects",
    component: ProjectsAdminComponent
  },
  {
    path: "admin/projects/create",
    component: ProjectsAdminCreateComponent
  },
  {
    path: "admin/projects/read",
    component: ProjectsAdminReadComponent
  },
  {
    path: "admin/projects/update",
    component: ProjectsAdminUpdateComponent
  },
  {
    path: "admin/projects/delete",
    component: ProjectsAdminDeleteComponent
  },
  {
    path: "admin/blog",
    component: BlogAdminComponent
  },
  {
    path: "admin/blog/create",
    component: BlogAdminCreateComponent
  },
  {
    path: "admin/blog/read",
    component: BlogAdminReadComponent
  },
  {
    path: "admin/blog/update",
    component: BlogAdminUpdateComponent
  },
  {
    path: "admin/blog/delete",
    component: BlogAdminDeleteComponent
  },
  {
    path: "admin/config",
    component: ConfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
