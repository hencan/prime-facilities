import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../../../services/login/login.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  storeData = this.loginService.loggedAs

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  goTo(route: string): void {
    this.router.navigate([route])
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

}
