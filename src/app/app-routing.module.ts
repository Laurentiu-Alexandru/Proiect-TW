import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ApplicationComponent } from "./application/application.component";
import { RestauranteComponent } from "./application/restaurante/restaurante.component";
import { DetailsRestaurantComponent } from "./application/details-restaurant/details-restaurant.component";
import { ProfileComponent } from "./application/profile/profile.component";
import { RinderComponent } from "./application/rinder/rinder.component";
import { CosComponent } from "./application/cos/cos.component";
import { ComenziComponent } from "./application/comenzi/comenzi.component";
import { PlatesteComponent } from "./application/plateste/plateste.component";
import { LoadingComponent } from "./application/loading/loading.component";

const appRoutes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'main', component: ApplicationComponent},
{path: 'rinder', component: RinderComponent},
{path: 'profile', component: ProfileComponent},
{path: 'cos', component: CosComponent},
{path: 'comenzi', component: ComenziComponent},
{path: 'plateste', component: PlatesteComponent},
{path: 'loading', component: LoadingComponent},
{path: 'restaurante', component: RestauranteComponent},
{path: 'restaurante/:name', component: DetailsRestaurantComponent}];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
