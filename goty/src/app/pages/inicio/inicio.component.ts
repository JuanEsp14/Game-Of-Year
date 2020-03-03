import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  constructor (private db: AngularFirestore ) { }

  ngOnInit() {
    this.db.collection('goty').valueChanges()
      .pipe( map( (games: Game[]) => {
        return games.map( ({name, votes}) => ({name, value: votes}));
        /**
         * Otra manera de retornar
         * return games.map( game => {
         * return{
         *     name: game.name,
         *     value: game.votes
         *   }
         * })
         */
      })).subscribe( resp => {
        console.log(resp);
      })
  }

}
