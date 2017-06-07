import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GamesService} from '../../services/games.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Game} from '../../models/game';
import {Team} from '../../models/team';
import {GameEventsService} from '../../services/game-events.service';
import {GameStats} from '../../models/game-stats';
import {GameStatsService} from '../../services/game-stats.service';

@Component({
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit, OnChanges {
  game: Game = new Game();
  private firstTeam = new Team();
  private secondTeam = new Team();
  private events = [];
  private stats: GameStats[] = [];

  chartsView: any[] = [150, 150];

  chartsColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private activatedRoute: ActivatedRoute,
              private gamesService: GamesService,
              private gameEventsService: GameEventsService,
              private gameStatsService: GameStatsService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.load(params['id']);
    });
  }

  load(id) {
    this.gamesService
      .get(id)
      .then(res => {
        this.game = res;
        this.updateEvents();
        this.updateStats();
      }, e => console.log(e));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // this.updateEvents();
  }

  updateEvents() {
    this.gameEventsService.getForGame(this.game.id).then(res => this.events = res, e => console.log(e));
  }

  updateStats() {
    this.gameStatsService.getForGame(this.game.id).then(res => this.stats = res, e => console.log(e));
  }
}
