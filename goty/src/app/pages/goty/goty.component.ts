import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: []
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor( private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominados()
      .subscribe((games: Game[]) => {
        this.games = games;
        console.log(games);
      });
  }

}
