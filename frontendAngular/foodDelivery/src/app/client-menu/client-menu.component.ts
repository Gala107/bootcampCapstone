import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent {

  constructor(private router: Router) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(["home"], {skipLocationChange: true});
  }

}
