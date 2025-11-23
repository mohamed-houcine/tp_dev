import { Component, signal } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';
import { TachesComponent } from './taches/taches';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [WelcomeComponent, Articles, Produits, TachesComponent],
})
export class App {
  protected readonly title = signal('tp4');
}
