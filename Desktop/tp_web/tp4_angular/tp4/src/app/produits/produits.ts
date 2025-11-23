import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.html',
  styleUrls: ['./produits.css'],
})
export class Produits {
  produits = [
    { nom: 'Produit A', stock: 80 },
    { nom: 'Produit B', stock: 35 },
    { nom: 'Produit C', stock: 10 }
  ];

  changerStock(p: any, valeur: number) {
    p.stock += valeur;
    if (p.stock < 0) p.stock = 0;
  }

  getStockColor(stock: number) {
    if (stock > 50) return 'green';
    if (stock >= 20) return 'orange';
    return 'red';
  }
}
