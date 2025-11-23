import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titre = "Bienvenue au Quiz";
  intro = "Répondez aux questions et suivez votre score en temps réel.";
}
