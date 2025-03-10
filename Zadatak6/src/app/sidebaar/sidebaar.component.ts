import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf],
  templateUrl: './sidebaar.component.html',
  styleUrls: ['./sidebaar.component.css']
})
export class SidebaarComponent {
  isExpanded: boolean = false;

  constructor(private router: Router) {}

  expand(event: any) {
    event.target.style.width = "100px";
    this.isExpanded = true;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
