import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookForm implements OnChanges {
  @Input() categories: string[] = [];
  @Input() book: Book | null = null;
  @Output() createBook = new EventEmitter<Book>();
  @Output() updateBook = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();

  model: Book = new Book(0, '', '', '', '', '', this.categories?.[0] ?? 'Autres', true, 0);
  releaseDateError = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['book']) {
      if (this.book) {
        this.model = new Book(
          this.book.id,
          this.book.title,
          this.book.author,
          this.book.publisherEmail,
          this.book.publisherPhone,
          this.book.releaseDate,
          this.book.category,
          this.book.isAvailable,
          this.book.stock
        );
      } else {
        this.resetModel();
      }
    }
  }

  resetModel() {
    this.model = new Book(0, '', '', '', '', '', this.categories?.[0] ?? 'Autres', true, 0);
    this.releaseDateError = '';
  }

  private isReleaseDateValid(dateStr?: string): boolean {
    if (!dateStr) return false;
    const y = new Date(dateStr).getFullYear();
    return !isNaN(y) && y > 1900;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (!this.isReleaseDateValid(this.model.releaseDate)) {
      this.releaseDateError = "L'année doit être supérieure à 1900";
      return;
    } else {
      this.releaseDateError = '';
    }

    if (this.model.stock !== undefined && this.model.stock !== null && this.model.stock < 0) {
      return;
    }

    if (this.model.id && this.model.id > 0) {
      this.updateBook.emit(new Book(
        this.model.id, this.model.title, this.model.author, this.model.publisherEmail,
        this.model.publisherPhone, this.model.releaseDate, this.model.category, this.model.isAvailable, this.model.stock
      ));
    } else {
      this.createBook.emit(new Book(
        0, this.model.title, this.model.author, this.model.publisherEmail,
        this.model.publisherPhone, this.model.releaseDate, this.model.category, this.model.isAvailable, this.model.stock
      ));
    }

    form.resetForm();
    this.resetModel();
  }

  onCancel() {
    this.cancelEdit.emit();
    this.resetModel();
  }
}
