import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2'

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

  voteGame( game: Game ){
    this.gameService.voteGame(game.id)
    .subscribe((resp: {ok: boolean, mensaje: string}) => {
      if( resp.ok ){
        Swal.fire({
          title: 'Thank you!',
          text: resp.mensaje,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } else{
        Swal.fire({
          title: 'Opps!',
          text: resp.mensaje,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }

}
