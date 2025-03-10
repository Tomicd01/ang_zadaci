import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('shrink') shrinkIcon!: ElementRef;

  constructor(private router: Router) {}

  expand(event: any) {
    this.isExpanded = true;
  }

  shrinkSideBar(){
    this.isExpanded = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
