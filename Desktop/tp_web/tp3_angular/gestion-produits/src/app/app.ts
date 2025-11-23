import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { Bienvenue } from './components/bienvenue/bienvenue';
import { Produit } from './components/produit/produit';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Panier } from './components/panier/panier';
@Component({
  selector: 'app-root',
  imports: [Bienvenue,Produit,Utilisateur,Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  panierItems: string[] = [];

  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }
}
