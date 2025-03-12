import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent  implements OnInit {
  users: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get('/assets/users.json').subscribe(data => {
      this.users = data;
    });
  }
}