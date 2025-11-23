import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Score } from '../score/score';
import { Question } from '../question/question';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [Score,Question,NgIf],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class GameComponent implements OnInit, OnDestroy {

  questions = [
    { question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique','Atlantique','Indien','Arctique'], reponse: 'Pacifique' },
    { question: 'Quelle est la capitale de l Algerie ?', options: ['Alger','Tunis','Tanja'], reponse: 'Alger' },
    { question: 'Quelle est la couleur du ciel ?', options: ['Bleu','Vert','Rouge'], reponse: 'Bleu' }
  ];

  index = 0;
  score = 0;
  bonnes = 0;
  mauvaises = 0;

  timeLeft: number | null = null;
  timePerQuestion = 15;
  timerSub: Subscription | null = null;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  get currentQ() {
    return this.questions[this.index];
  }

  startTimer() {
    this.stopTimer();
    this.timeLeft = this.timePerQuestion;

    this.timerSub = interval(1000).subscribe(() => {
      if (this.timeLeft !== null) {
        this.timeLeft--;

        if (this.timeLeft <= 0) {
          this.processAnswer("");
        }
      }
    });
  }

  stopTimer() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
      this.timerSub = null;
    }
    this.timeLeft = null;
  }

  processAnswer(selected: string) {
    this.stopTimer();

    const correct = selected === this.currentQ.reponse;

    if (correct) { 
      this.score += 10; this.bonnes++; 
    }
    else { 
      this.score = Math.max(0, this.score - 2);
      this.mauvaises++; 
    }

    setTimeout(() => this.next(), 600);
  }

  onAnswered(event: any) {
    this.processAnswer(event.selected);
  }

  next() {
    if (this.index < this.questions.length - 1) {
      this.index++;
      this.startTimer();
    } else {
      this.timeLeft = null;
      console.log('Quiz terminé', { score: this.score, bonnes: this.bonnes, mauvaises: this.mauvaises });
    }
  }
}