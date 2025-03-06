import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Transaction } from '../models/Transaction';
import { transactionsArray } from '../data/transactions.data';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transactions = transactionsArray.map(
    t => new Transaction(t.id, t.date, t.amount, t.type, t.card, t.title)
  );

  clearTransactions(){
    this.transactions = [];
  }

  showTransactions: boolean = true;
  title = 'Zadatak1';
}
