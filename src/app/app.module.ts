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

import { AuthentificationService } from '../app/auth/auth.service';
import { DatabaseService } from '../app/database-service/database.service';
import { MainComponent } from './application/main/main.component';
import { RestauranteComponent } from './application/restaurante/restaurante.component';
import { ApplicationComponent } from './application/application.component';
import { HeaderComponent } from './application/header/header.component';
import { FooterComponent } from './application/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    RestauranteComponent,
    ApplicationComponent,
    HeaderComponent,
    FooterComponent
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
