import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree > | Promise<boolean | UrlTree> | boolean | UrlTree{
  
      const user = JSON.parse(localStorage.getItem('user') as string);
      if (user) {
        return true;
      }
      alert("Jelentkezz be!")
      return false;

  return true;}
}
