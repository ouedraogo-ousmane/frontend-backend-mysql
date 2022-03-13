import { NgModule } from "@angular/core";
import { Router,RouterModule } from "@angular/router";
import { AuthentificationComponent } from "./folderComponents/componentApplication/authentification/authentification.component";




@NgModule({

    imports:[RouterModule.forRoot([
      {path:'**',component: AuthentificationComponent}
    ])],

    exports:[RouterModule]
})

export class AppRoutingModule{}
