import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAutenticationService } from './hardcoded-autentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.HardcodedAuntenticationService.isUserLoggedIn())
      return true;    
    this.router.navigate(["login"])
    return false
  }
  constructor(private HardcodedAuntenticationService:HardcodedAutenticationService,private router: Router) {

   }
}
