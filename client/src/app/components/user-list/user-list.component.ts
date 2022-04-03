import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getUsers().subscribe(user => this.userList = user);
  }
  
}
