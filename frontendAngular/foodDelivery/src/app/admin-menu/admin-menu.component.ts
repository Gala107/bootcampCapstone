import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {

  name: any = sessionStorage.getItem("userName");

  constructor(private router: Router) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(["home"], {skipLocationChange: true});
  }
}
