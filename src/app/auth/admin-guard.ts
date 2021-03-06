import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable()
export class AdminGaurd implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  // canActivate() {
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   }
  //   this.router.navigate(["no-access"]);
  //   return false;
  // }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["/signup"]);
    return false;
  }
}



