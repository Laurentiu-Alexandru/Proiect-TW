import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { RestauranteComponent } from "./restaurante/restaurante.component";

const appRoutes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'main', component: MainComponent},
{path: 'startPage', component: StartPageComponent},
{path: 'restaurante', component: RestauranteComponent}];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
