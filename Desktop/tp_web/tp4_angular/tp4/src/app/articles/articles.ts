import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css'],
})
export class Articles {
  articles = [
    { titre: 'LapTop Asus', contenu: 'Contenu de l\'article 1', importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: 'Contenu de l\'article 2', importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: 'Contenu de l\'article 3', importance: 'faible' }
  ];

  newTitle = '';
  newContent = '';
  newImportance = 'moyenne';

  addArticle() {
    if (!this.newTitle.trim() || !this.newContent.trim()) {
      return;
    }

    this.articles.push({
      titre: this.newTitle,
      contenu: this.newContent,
      importance: this.newImportance
    });

    this.newTitle = '';
    this.newContent = '';
    this.newImportance = 'moyenne';
  }
}
