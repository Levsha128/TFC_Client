import {Component, OnInit} from '@angular/core';
import {PlayersService} from "../../services/players.service";
import {GamesService} from "../../services/games.service";
import {Game, GameState} from "../../models/game";
import {Player} from '../../models/player';
import {Team} from '../../models/team';
import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})
export class NewGameComponent implements OnInit {
  players = [];

  progress = false;
  game: Game = new Game();
  firstTeamForward: number = null;
  firstTeamGoalkeeper: number = null;
  secondTeamForward: number = null;
  secondTeamGoalkeeper: number = null;
  firstTeam: Team = new Team();
  secondTeam: Team = new Team();
  STATES: typeof GameState = GameState;

  constructor(private playersService: PlayersService, private gamesService: GamesService, private teamsService: TeamsService) {
  }

  ngOnInit() {
    this.updatePlayersList();
  }

  start() {
    this.progress = true;
    this.gamesService.create(this.firstTeamForward, this.firstTeamGoalkeeper, this.secondTeamForward, this.secondTeamGoalkeeper)
      .then(
        (result) => {
          this.game = result;
          this.progress = false;
          this.updateTeams();
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

  public updateTeams() {
    this.teamsService.findByPlayers(this.game.firstTeamForwardId, this.game.firstTeamGoalkeeperId)
      .then((res) => this.firstTeam = res, (err) => console.error(err));
    this.teamsService.findByPlayers(this.game.secondTeamForwardId, this.game.secondTeamGoalkeeperId)
      .then((res) => this.secondTeam = res, (err) => console.error(err));
  }

  public onGoal(goal) {
    this.progress = true;
    this.gamesService.goal(this.game.id, goal.goalmakerId, goal.goalkeeperId)
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
