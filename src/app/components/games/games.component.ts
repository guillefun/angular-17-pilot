import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: '1',
      name: 'Uncharted 4',
      fav: false
    },
    {
      id: '2',
      name: 'Minecraft',
      fav: false
    },
    {
      id: '3',
      name: 'Dark Souls',
      fav: false
    }
  ]

  setFav(index: string) {
    let game = this.games.find(( game) => game.id === index);
    if(game) {
      game.fav = !game.fav
      if(game.fav) {
        this.addFavoriteEvent.emit(game.name)
      }
    }
  }
}
