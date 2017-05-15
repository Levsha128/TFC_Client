import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {GamesService} from '../../services/games.service';
import {Game} from "../../models/game";

@Component({
  selector: 'app-games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {

  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.gamesService
      .getGames()
      .then(res => this.games = res, e => console.log(e));
  }
}
