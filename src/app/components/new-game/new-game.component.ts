import {Component, OnInit} from '@angular/core';
import {PlayersService} from "../../services/players.service";
import {GamesService} from "../../services/games.service";
import {Game} from "../../models/game";

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})
export class NewGameComponent implements OnInit {
  players = [];
  state = 'selectPlayers';

  progress = false;
  game: Game = new Game();
  self = this;

  constructor(private playersService: PlayersService, private gamesService: GamesService) {
  }

  ngOnInit() {
    this.updatePlayersList();
  }

  start() {
    this.progress = true;
    this.state = 'game';
    this.gamesService.create(this.game)
      .then(
        (result) => {
          this.game = result;
          this.progress = false;
        },
        (error) => {
          console.log(error);
          this.progress = false;
        });
  }

  public updatePlayersList() {
    this.progress = true;
    this.playersService.getFriendsList().then(
      (players) => {
        this.players = players;
        this.progress = false;
      },
      (err) => {
        console.error(err);
        this.progress = false;
      }
    );
  }

  public onGoal(goal) {
    this.progress = true;
    this.gamesService.goal(this.game.id, goal.player_id, goal.own_goal)
      .then(
        (result) => {
          this.gamesService.get(this.game.id)
            .then(
              (newGame) => {
                this.game = newGame;
                this.progress = false;
              },
              (error) => {
                console.log(error);
                this.progress = false;
              });
        },
        (error) => {
          console.log(error);
          this.progress = false;
        });


  }

}
