import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/folderServices/serviceApplication/authentification.service';


@Injectable({
  providedIn: 'root'
})
export class AuthentifiationGuard implements CanActivate {
  constructor(private auth:AuthentificationService, private router:Router){}

 canActivate():boolean{
    return true;
  }





}
