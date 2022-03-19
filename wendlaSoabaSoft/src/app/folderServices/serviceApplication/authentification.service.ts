import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from 'src/app/folderModels/modelGestEntreprise/login-data';

interface User{
  password:string,
  name : string,
  role:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  readonly baseUrl = 'http://localhost/'
   private loggedInStatus:boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  setLoggedIn(value:boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn',value.toString())
   }

  clearLoggedData(){
    localStorage.removeItem('loggedIn');
    localStorage.clear()
   }

  get isLoggedIn(){
     return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
   }


   getUserData():Observable<LoginData>{
    //user data retreiving
    return this.http.get<LoginData>(this.baseUrl);
   }


  constructor(private http:HttpClient) { }

  //local test
  readonly userLoginData:User={
    password:"1234",
    name:"kalmogo",
    role:"administrateur"
  }

  isUserData(data:User){
    if((data.password == this.userLoginData.password) &&
        data.name == this.userLoginData.name
    )
    {
      localStorage.setItem("userConnected",'true')
       return true;
    }
    else return false;
   }
}
