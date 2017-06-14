import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Game} from "../../models/game";
import {Team} from "../../models/team";
import {TeamsService} from "../../services/teams.service";

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit, OnChanges {
  @Input() game = new Game();
  private firstTeam = new Team();
  private secondTeam = new Team();

  constructor(private teamsService: TeamsService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.updateFirstTeam();
    this.updateSecondTeam();
  }

  private updateFirstTeam() {
    this.teamsService.findByPlayers(this.game.firstTeamForwardId, this.game.firstTeamGoalkeeperId).then(
      (team) => {
        this.firstTeam = team;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  private updateSecondTeam() {
    this.teamsService.findByPlayers(this.game.secondTeamForwardId, this.game.secondTeamGoalkeeperId).then(
      (team) => {
        this.secondTeam = team;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
