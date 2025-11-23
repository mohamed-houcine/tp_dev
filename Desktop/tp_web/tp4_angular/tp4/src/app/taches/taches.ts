import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tache {
  description: string;
  statuts: boolean;
  priorite: 'haute' | 'moyenne' | 'basse';
}



@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taches.html',
  styleUrls: ['./taches.css']
})
export class TachesComponent {

  taches: Tache[] = [
    { description: 'Réviser Angular', statuts: false, priorite: 'haute' },
    { description: 'Faire le TP', statuts: false, priorite: 'moyenne' },
    { description: 'Regarder une vidéo', statuts: true, priorite: 'basse' },
  ];

  toggleStatut(t: Tache) {
    t.statuts = !t.statuts;
  }

  getColor(priorite: string) {
    switch (priorite) {
      case 'haute': return 'red';
      case 'moyenne': return 'orange';
      default: return 'green';
    }
  }
}
