import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question implements OnChanges {
  @Input() q: any;
  @Input() index: number = 0;
  @Input() timeLeft: number | null = null;

  @Output() answered = new EventEmitter<any>();

  answeredLocal = false;
  textAnswer = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['q']) {
      this.answeredLocal = false;
      this.textAnswer = '';
    }
  }

  selectOption(opt: string) {
    if (this.answeredLocal) return;
    this.answeredLocal = true;
    this.answered.emit({ selected: opt });
  }

  submitText() {
    if (this.answeredLocal || !this.textAnswer.trim()) return;
    this.answeredLocal = true;
    this.answered.emit({ selected: this.textAnswer });
  }
}