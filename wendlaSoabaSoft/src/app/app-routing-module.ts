import { NgModule } from "@angular/core";
import { Router,RouterModule } from "@angular/router";
import { AuthentificationComponent } from "./folderComponents/componentApplication/authentification/authentification.component";
import { GestionDroitRolesComponent } from "./folderComponents/componentApplication/gestion-droit-roles/gestion-droit-roles.component";
import { GestionRolesComponent } from "./folderComponents/componentApplication/gestion-roles/gestion-roles.component";
import { NotFoundPageComponent } from "./folderComponents/componentApplication/not-found-page/not-found-page.component";
import { PageDeGardeComponent } from "./folderComponents/componentApplication/page-de-garde/page-de-garde.component";
import { StatistiquesComponent } from "./folderComponents/componentApplication/statistiques/statistiques.component";
import { ChauffeurComponent } from "./folderComponents/componentGestEntreprise/chauffeur/chauffeur.component";
import { DetailChauffeursComponent } from "./folderComponents/componentGestEntreprise/detail-chauffeurs/detail-chauffeurs.component";
import { DetailExercicesComponent } from "./folderComponents/componentGestEntreprise/detail-exercices/detail-exercices.component";
import { InventaireEquipementsComponent } from "./folderComponents/componentGestEntreprise/inventaire-equipements/inventaire-equipements.component";
import { ListeExercicesComponent } from "./folderComponents/componentGestEntreprise/liste-exercices/liste-exercices.component";
import { GestionTrajetsComponent } from "./folderComponents/componentGestMission/gestion-trajets/gestion-trajets.component";
import { ProgrammationComponent } from "./folderComponents/componentGestMission/programmattion/programmation.component";
import { SuivieClientsComponent } from "./folderComponents/componentGestRecette/suivie-clients/suivie-clients.component";
import { SuivieDepensesHorsMissionComponent } from "./folderComponents/componentGestRecette/suivie-depenses-hors-mission/suivie-depenses-hors-mission.component";
import { SuivieDepensesMissionComponent } from "./folderComponents/componentGestRecette/suivie-depenses-mission/suivie-depenses-mission.component";
import { SuivieRecettesSansPesageComponent } from "./folderComponents/componentGestRecette/suivie-recettes-sans-pesage/suivie-recettes-sans-pesage.component";
import { SuivieRecttesPesageComponent } from "./folderComponents/componentGestRecette/suivie-recttes-pesage/suivie-recttes-pesage.component";
import { AuthentifiationGuard } from "./folderGuards/guardApplicationComponent/authentifiation.guard";

@NgModule({

    imports:[RouterModule.forRoot([
      {path:'acceuil-page',component:PageDeGardeComponent,
      canActivate:[AuthentifiationGuard]},
      {path:'liste-exercices',component:ListeExercicesComponent},
      {path:'detail-exercices/:_id',component:DetailExercicesComponent},
      {path:'mission/:_id',component:ProgrammationComponent},
      {path:'depenses-mission/:_id',component:SuivieDepensesMissionComponent},
      {path:'depenses-Hors-mission/:_id',component:SuivieDepensesHorsMissionComponent},
      {path:'recettes-pesees/:_id',component:SuivieRecttesPesageComponent},
      {path:'recettes-Sanspesees/:_id',component:SuivieRecettesSansPesageComponent},
      {path:'client-page',component:SuivieClientsComponent},
      {path:'droits-de-role',component:GestionDroitRolesComponent},
      {path:'gestion-role',component:GestionRolesComponent},
      {path:'inventaire-equipements',component:InventaireEquipementsComponent},
      {path:'vehicule',component:ListeExercicesComponent},
      {path:'chauffeurs',component:ChauffeurComponent},
      {path:'detail-chauffeurs/:_id',component:DetailChauffeursComponent},
      {path:'trajets',component:GestionTrajetsComponent},
      {path:'statistiques',component:StatistiquesComponent},
      {path:'',component:AuthentificationComponent
      },

      {path:'**',component:NotFoundPageComponent}

    ])],

    exports:[RouterModule]
})

export class AppRoutingModule{}
