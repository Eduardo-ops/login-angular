import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser: boolean = false
  constructor(private router: Router) { }

  authLogin() {
    this.authUser = true
    this.router.navigate(['/home'])
  }

  isAuthUser() {
    return this.authUser = true
  }

}
