import {Component, OnInit} from '@angular/core';
import {PlayersService} from "../../services/players.service";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})
export class NewGameComponent implements OnInit {
  players = [];
  state = 'selectPlayers';
  firstTeamForward = null;
  firstTeamGoalkeeper = null;
  secondTeamForward = null;
  secondTeamGoalkeeper = null;
  progress = false;
  game = {};
  self = this;

  constructor(private playersService: PlayersService, private gamesService: GamesService) {
  }

  ngOnInit() {
    this.updatePlayersList();
  }

  start() {
    this.progress = true;
    this.state = 'game';
    this.gamesService.create(
      this.firstTeamForward,
      this.firstTeamGoalkeeper,
      this.secondTeamForward,
      this.secondTeamGoalkeeper
    )
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
    console.log('onGoal', goal.player_id, goal.own_goal);
    this.progress = true;
    this.gamesService.goal(this.game['id'], goal.player_id, goal.own_goal)
      .then(
        (result) => {
          this.gamesService.get(this.self.game['id'])
            .then(
              (result) => {
                this.game = result;
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
