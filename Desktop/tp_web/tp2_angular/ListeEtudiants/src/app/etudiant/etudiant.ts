import { Component } from '@angular/core';
import {Student} from './typeStudent' ;
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant : Student={
    id:1,
    name:'Ali Ben Saleh'
  };

}
