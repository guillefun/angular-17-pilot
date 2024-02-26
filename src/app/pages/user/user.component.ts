import { GamesComponent } from './../../components/games/games.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = 'guille';
  isLogged = true;

  getFavGame(event: string) {
    alert(`${event} añadido a favoritos`);
  }
}
