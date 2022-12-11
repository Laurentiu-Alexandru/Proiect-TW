import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MainComponent } from './main/main.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { AuthentificationService } from '../app/auth/auth.service';
import { DatabaseService } from '../app/database-service/database.service';
import { StartPageComponent } from './start-page/start-page.component';
import { RestauranteComponent } from './restaurante/restaurante.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    StartPageComponent,
    RestauranteComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthentificationService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
