import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Home } from './components/home/home';
import { GameComponent } from './components/game/game';
import { Question } from './components/question/question';
import { Score } from './components/score/score';

@Component({
  selector: 'app-root',
  imports: [Home,GameComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jeu-quiz');
}
