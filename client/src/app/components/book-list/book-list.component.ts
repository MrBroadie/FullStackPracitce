import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[] = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.fetchBooks()
  }

  fetchBooks() {
    this.api.getBooks().subscribe(books => this.bookList = books)
  }
}
