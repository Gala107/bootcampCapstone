import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HUNDREDS OF FLAVORS UNDER ONE ROOF';
  public sessionStorage: Storage = sessionStorage;

  constructor(public router: Router, private ngbModal: NgbModal) {}

  signIn(): void {
    const loginModal = this.ngbModal.open(LoginComponent);
    loginModal.componentInstance.loginOption = 'signIn';
    loginModal.componentInstance.instanceRef = loginModal;
  }

  signUp(): void {
    const loginModal = this.ngbModal.open(LoginComponent);
    loginModal.componentInstance.loginOption = 'signUp';
  }

  signOut(): void {
    sessionStorage.clear();
    this.router.navigate([""], {skipLocationChange: true});
  }

  manageRestaurants(): void {

  }

  manageMenu(): void {

  }

}
