import {Component} from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ273ywvo3Jzs4UUy7KIUiGCTUDCA6aqs",
  authDomain: "proiect-tw01.firebaseapp.com",
  databaseURL: "https://proiect-tw01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proiect-tw01",
  storageBucket: "proiect-tw01.appspot.com",
  messagingSenderId: "775115098883",
  appId: "1:775115098883:web:8bdd45ae8448e50492b736",
  measurementId: "G-JZT5TWN5T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
