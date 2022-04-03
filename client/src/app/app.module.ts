import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    BookDetailsComponent,
    NavBarComponent,
    UserDetailsComponent,
    BookListComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
