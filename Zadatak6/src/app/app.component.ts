import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { SidebaarComponent } from './sidebaar/sidebaar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, SidebaarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zadatak6';
}
