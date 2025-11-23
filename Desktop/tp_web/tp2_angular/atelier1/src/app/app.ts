import { Component, signal } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { Profil } from './profil/profil';
import { Utilisateur } from './utilisateur/utilisateur';
import { Adresse } from './composants/adresse/adresse';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [Utilisateur,Profil,FormsModule,Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atelier1');
}
