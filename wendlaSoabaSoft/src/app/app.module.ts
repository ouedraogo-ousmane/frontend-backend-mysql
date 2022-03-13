import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './folderComponents/componentApplication/authentification/authentification.component';
import { ParcComponent } from './folderComponents/componentGestEntreprise/parc/parc.component';
import { MissionComponent } from './folderComponents/componentGestMission/mission/mission.component';
import { ClientsComponent } from './folderComponents/componentGestRecette/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ParcComponent,
    MissionComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
