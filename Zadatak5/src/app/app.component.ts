import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { faq } from './data/app.questions.data';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zadatak5';
  faqs: any = faq;
  
  expandedQuestions: boolean[] = [];

  constructor() {
    this.expandedQuestions = new Array(this.faqs.length).fill(false);
  }

  expand(index: number) {
    this.expandedQuestions[index] = !this.expandedQuestions[index];
  }
}
