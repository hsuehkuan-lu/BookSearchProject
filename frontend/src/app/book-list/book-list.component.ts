import { Component } from '@angular/core';
import BookJson from '@assets/book.json';

interface Book {
  title: string;
  category?: string;
  author: string;
  translator?: string;
  publisher?: string;
  date?: string;
  price?: number;
  introduction?: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = BookJson;

  constructor() {
    console.log(this.books);
  }
}
