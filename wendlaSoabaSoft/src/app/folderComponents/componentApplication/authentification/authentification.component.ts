import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import '@cds/core/button/register.js';
import { applicationsIcon, blocksGroupIcon, buildingIcon,
         bundleIcon, ClarityIcons, cogIcon } from '@cds/core/icon';
import { Chauffeurs } from 'src/app/folderModels/modelGestEntreprise/chauffeurs';

import { AuthentificationService } from 'src/app/folderServices/serviceApplication/authentification.service';

interface User{
  password:string,
  name : string,
  role:string
}
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AuthentificationComponent implements OnInit {

  userData:FormGroup = new FormGroup({});
  user:User  = {
    password:'',
    name:'',
    role:''
  }



  constructor(private fb:FormBuilder,
              private router:Router,
              private route:ActivatedRoute,
              private auth:AuthentificationService) {
   }



  ngOnInit(): void {
    ClarityIcons.addIcons(
      applicationsIcon,bundleIcon,
      blocksGroupIcon,buildingIcon,cogIcon
      )

      this.userData = this.fb.group({
        name     :this.fb.control('',Validators.required),
        password :this.fb.control('',Validators.required),
        role     :this.fb.control('',Validators.required),
        cookieSet: this.fb.control('',Validators.required),
        Secret   : this.fb.control('',Validators.required),

      });

      this.auth.setLoggedIn(false);
  }

  get isValidData(){
    if(this.userData.get('password')?.valid &&
      this.userData.get('role')?.valid &&
      this.userData.get('name')?.valid){
        return true;
      }
    return false;
  }

  setlogged(){
    this.user ={
      password: this.userData.get('password')?.value,
      name    : this.userData.get('name')?.value,
      role    : this.userData.get('role')?.value
    }

    if(this.auth.isUserData(this.user))
    {
        this.auth.setLoggedIn(true);
        this.router.navigate(['acceuil-page'])
    }else{
      alert("mot de passe incorrect!");
      this.router.navigate(['']);
      localStorage.removeItem('loggedIn');
    }
  }

  isAlreadyConnected(){
    let isConnected = localStorage.getItem('userConnected');

  }
}


