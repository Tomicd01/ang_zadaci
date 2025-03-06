import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from '../Models/Movie';
import { MoviesList } from '../data/app.movies.data';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies : Movie[] = MoviesList.map(
    m => new Movie(m.id, m.title, m.img, m.stars)
  )
  originalMovies: Movie[] = MoviesList;

  hoverStates: { [key: number]: boolean } = {};  

  onHover(movieId: number, isHovering: boolean) {
    this.hoverStates[movieId] = isHovering;
  }
  
  removeMovie(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  resetMovies() {
    this.movies = [...this.originalMovies]; 
  }
  
  title = 'Zadatak2';
}
