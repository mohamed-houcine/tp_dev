import { Component } from '@angular/core';
import { Students,Student } from '../TypeStudent';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [NgIf,NgFor,FormsModule,UpperCasePipe],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etuds: Student[] = Students;

  selectedEtudiant?: Student;

  onSelect(e: Student): void {
    this.selectedEtudiant = e;
  }
}
