
//modules angular
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//listes des components crées
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './folderComponents/componentApplication/authentification/authentification.component';
import { MissionComponent } from './folderComponents/componentGestMission/mission/mission.component';
import { AuthentifiationGuard } from './folderGuards/guardApplicationComponent/authentifiation.guard';
import { AuthentificationService } from './folderServices/serviceApplication/authentification.service';
import { ChauffeurComponent } from './folderComponents/componentGestEntreprise/chauffeur/chauffeur.component';
import { DetailChauffeursComponent } from './folderComponents/componentGestEntreprise/detail-chauffeurs/detail-chauffeurs.component';
import { InventaireEquipementsComponent } from './folderComponents/componentGestEntreprise/inventaire-equipements/inventaire-equipements.component';
import { ListeExercicesComponent } from './folderComponents/componentGestEntreprise/liste-exercices/liste-exercices.component';
import { DetailExercicesComponent } from './folderComponents/componentGestEntreprise/detail-exercices/detail-exercices.component';
import { PageDeGardeComponent } from './folderComponents/componentApplication/page-de-garde/page-de-garde.component';
import { GestionRolesComponent } from './folderComponents/componentApplication/gestion-roles/gestion-roles.component';
import { GestionDroitRolesComponent } from './folderComponents/componentApplication/gestion-droit-roles/gestion-droit-roles.component';
import { ProgrammationComponent } from './folderComponents/componentGestMission/programmattion/programmation.component';
import { GestionTrajetsComponent } from './folderComponents/componentGestMission/gestion-trajets/gestion-trajets.component';
import { SuiviVehiculesComponent } from './folderComponents/componentGestMission/suivi-vehicules/suivi-vehicules.component';
import { SuivieDepensesMissionComponent } from './folderComponents/componentGestRecette/suivie-depenses-mission/suivie-depenses-mission.component';
import { SuivieDepensesHorsMissionComponent } from './folderComponents/componentGestRecette/suivie-depenses-hors-mission/suivie-depenses-hors-mission.component';
import { SuivieRecttesPesageComponent } from './folderComponents/componentGestRecette/suivie-recttes-pesage/suivie-recttes-pesage.component';
import { SuivieRecettesSansPesageComponent } from './folderComponents/componentGestRecette/suivie-recettes-sans-pesage/suivie-recettes-sans-pesage.component';
import { SuivieClientsComponent } from './folderComponents/componentGestRecette/suivie-clients/suivie-clients.component';
import { SuivieProduitsComponent } from './folderComponents/componentGestRecette/suivie-produits/suivie-produits.component';
import { NotFoundPageComponent } from './folderComponents/componentApplication/not-found-page/not-found-page.component';
import { StatistiquesComponent } from './folderComponents/componentApplication/statistiques/statistiques.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    MissionComponent,
    ChauffeurComponent,
    DetailChauffeursComponent,
    InventaireEquipementsComponent,
    ListeExercicesComponent,
    DetailExercicesComponent,
    PageDeGardeComponent,
    GestionRolesComponent,
    GestionDroitRolesComponent,
    ProgrammationComponent,
    GestionTrajetsComponent,
    SuiviVehiculesComponent,
    SuivieDepensesMissionComponent,
    SuivieDepensesHorsMissionComponent,
    SuivieRecttesPesageComponent,
    SuivieRecettesSansPesageComponent,
    SuivieClientsComponent,
    SuivieProduitsComponent,
    NotFoundPageComponent,
    StatistiquesComponent,

  ],

  imports: [
    CommonModule,

    BrowserModule,

    BrowserAnimationsModule,



    AppRoutingModule,

    ReactiveFormsModule,

    HttpClientModule,

    RouterModule,

  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [
    {provide: LOCALE_ID, useValue: "fr-FR"},
    DatePipe,
    AuthentifiationGuard, AuthentificationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
