import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  imports: [NgIf, NgClass],
  templateUrl: './sidebaar.component.html',
  styleUrls: ['./sidebaar.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ width: '50px', opacity: 0.5 })),
      state('expanded', style({ width: '200px', opacity: 1 })),
      transition('collapsed <=> expanded', animate('0.3s ease-in-out'))
    ])
  ],
})
export class SidebaarComponent {
  activeRoute: string = '/home';
  isExpanded: boolean = false;
  @ViewChild('shrink') shrinkIcon!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Kad se ruta promeni, ažuriraj aktivnu rutu
      this.activeRoute = this.router.url;
    });
  }

  expand(event: any) {
    this.isExpanded = true;
  }

  shrinkSideBar(){
    this.isExpanded = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.activeRoute = route;
    console.log(this.activeRoute)
  }
}
