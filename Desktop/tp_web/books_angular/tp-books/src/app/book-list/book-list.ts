import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() editBook = new EventEmitter<Book>();
  @Output() deleteBook = new EventEmitter<number>();

  searchTerm = '';
  sortBy: 'none'|'category'|'availability' = 'none';

  get filtered() {
    let list = this.books.filter(b =>
      (b.title || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      (b.author || '').toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortBy === 'category') {
      list = [...list].sort((a,b) => (a.category || '').localeCompare(b.category || ''));
    } else if (this.sortBy === 'availability') {
      list = [...list].sort((a,b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return list;
  }

  trackById(index: number, item: Book) { return item.id; }
}
