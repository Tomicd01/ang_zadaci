import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-table',
  imports: [NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  users: User[] = []; 
  keys : string[] = []
  isEditable : boolean[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<User[]>('/assets/users.json').subscribe(data => { 
      this.users = data;  
      this.keys = Object.keys(this.users[0])
      this.users.forEach((element, index) => {
        if(element.role != 'admin'){
          this.isEditable[index] = true;
        }
        else{
          this.isEditable[index] = false;
        }
      });
      console.log(this.isEditable);
    });
  }
}