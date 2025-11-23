import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, BookForm, BookList],
  templateUrl: './book-container.html',
  styleUrls: ['./book-container.css']
})
export class BookContainer {
  categories = ['Roman','Science','Histoire','Informatique','Art','Autres'];

  books: Book[] = [
    new Book(1, 'Clean Code', 'Robert C. Martin', 'pub@cleancode.com', '2025550123', '2008-08-01', 'Informatique', true, 10),
    new Book(2, 'Atomic Habits', 'James Clear', 'support@jamesclear.com', '2025550188', '2018-10-16', 'Autres', true, 30),
    new Book(3, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 'contact@editions.com', '21612345678', '1943-04-06', 'Roman', false, 0)
  ];

  bookToEdit: Book | null = null;
  private nextId = 100;

  onCreateBook(newBook: Book) {
    newBook.id = ++this.nextId;
    this.books.push(new Book(
      newBook.id,
      newBook.title,
      newBook.author,
      newBook.publisherEmail,
      newBook.publisherPhone,
      newBook.releaseDate,
      newBook.category,
      newBook.isAvailable,
      newBook.stock
    ));
  }

  onDeleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  onEditRequest(book: Book) {
    this.bookToEdit = new Book(
      book.id, book.title, book.author, book.publisherEmail,
      book.publisherPhone, book.releaseDate, book.category, book.isAvailable, book.stock
    );
  }

  onUpdateBook(updated: Book) {
    const idx = this.books.findIndex(b => b.id === updated.id);
    if (idx >= 0) {
      this.books[idx] = new Book(
        updated.id, updated.title, updated.author, updated.publisherEmail,
        updated.publisherPhone, updated.releaseDate, updated.category, updated.isAvailable, updated.stock
      );
    }
    this.bookToEdit = null;
  }

  onCancelEdit() {
    this.bookToEdit = null;
  }
}
