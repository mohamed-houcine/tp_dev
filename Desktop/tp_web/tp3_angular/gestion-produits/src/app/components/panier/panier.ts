import { NgFor, NgIf } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-panier',
  imports: [NgFor,NgIf],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  @Input() items: string[] = [];

}
