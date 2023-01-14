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
import { DetailsRestaurantComponent } from './application/details-restaurant/details-restaurant.component';
import { ProfileComponent } from './application/profile/profile.component';
import { RinderComponent } from './application/rinder/rinder.component';
import { CosComponent } from './application/cos/cos.component';
import { PlatesteComponent } from './application/plateste/plateste.component';
import { ComenziComponent } from './application/comenzi/comenzi.component';
import { LoadingComponent } from './application/loading/loading.component';
import { CardComponent } from './application/rinder/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    RestauranteComponent,
    ApplicationComponent,
    HeaderComponent,
    FooterComponent,
    DetailsRestaurantComponent,
    ProfileComponent,
    RinderComponent,
    CosComponent,
    PlatesteComponent,
    ComenziComponent,
    LoadingComponent,
    CardComponent
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
