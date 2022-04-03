import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //need some functions below here:

  getBooks(): Observable <Book[]> {
    return this.http.get<Book[]>(this.rootUrl + '/books')
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.rootUrl + '/users')
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.rootUrl}/books/${id}`)
  }
  
}
