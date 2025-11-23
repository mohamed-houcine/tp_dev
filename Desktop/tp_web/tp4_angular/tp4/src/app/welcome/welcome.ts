import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {
  isLoggedIn = false;
  prenom = '';
  monPrenom = 'Houcine';

  toggleLogin() {
    if (this.prenom === this.monPrenom) {
      this.isLoggedIn = !this.isLoggedIn;
    } else {
      alert('Prénom incorrect');
    }
  }
}
