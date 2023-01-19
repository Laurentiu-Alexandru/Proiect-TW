# Numele echipei: Rinder

# Membrii echipei:
1. Goga Iosif-Beniamin (Back-end, conexiune la baza de date, crearea de endpoint-uri, implementarea paginilor de autentificare)
2. Casa Laurențiu-Alexandru(Front-end, adaugarea de date in baza de date, crearea de pagini si adaugarea unei structuri generale) 
3. Fârțală Mihai-Iosif(Front-end, stilizare pagini, responsiveness, adaugarea de elemente in pagini)

# Tehnologi folosite:
* Angular (Framework-ul de baza)
* Firebase hosting (API folosit pentru hostarea paginii web)
* Firebase Realtime Database (API folosit pentru a stoca date si a modifica aceste date)
* Json-server (REST API folosit pentru testarea generala a bazei de date, pentru a nu realiza prea multe apeluri la API-ul Firebase)

# Descrierea aplicației:
Aplicatia pe care am dezvoltat-o este o aplicatie care permite utilizatorului sa comande mancare de la o selectie de restaurante. Utilizatorul isi poate selecta ce feluri de mancare vrea sa comande prin intermediul paginii Rinder, astfel i se va crea un profil de preferinte care este folosit la filtrarea restaurantelor.

#  Modul de utilizare:
Puteti accesa site-ul prin intermediul link-ului: https://proiect-tw01.web.app

Sau descarcand repozitorul si ruland urmatoarele comenzi in terminal: 
1. npm i
2. ng serve
Daca dorim sa folosim Json-server va trebui sa intram in web_tech_projects-rinder\src\app\database-service\database-service.ts sa decomentam codul care se afla sub comentariul // JSON-SERVER si sa comentam codul care se afla sub // FIREBASE DATABASE, apoi trebuie sa rulam in terminal urmatoarele comenzi:
1. cd json-server
 2. npm run server


## Urmatorul continut a fost generat automat de Angular CLI 



# ProiectTW

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
