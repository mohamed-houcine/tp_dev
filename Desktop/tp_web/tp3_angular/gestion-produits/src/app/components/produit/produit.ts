import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [NgClass,NgStyle],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Input() prix: number = 99.99;
  imageUrl: string = '/assets/pc_img.jpg';
  @Output() ajouterAuPanier = new EventEmitter<string>();

  enStock: boolean = true;

  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  afficherAlerte(): void {
    alert('Produit ajouté au panier');
  }

  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
    this.afficherAlerte();
  }
}
