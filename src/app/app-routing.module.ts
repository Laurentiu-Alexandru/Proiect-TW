import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ApplicationComponent } from "./application/application.component";
import { RestauranteComponent } from "./application/restaurante/restaurante.component";

const appRoutes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'app', component: ApplicationComponent},
{path: 'restaurante', component: RestauranteComponent}];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
