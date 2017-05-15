import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayersService} from "../../services/players.service";
import {GamesService} from "../../services/games.service";
import {InputDecorator} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-player-game-controls',
  templateUrl: './player-game-controls.component.html',
  styleUrls: ['./player-game-controls.component.css']
})
export class PlayerGameControlsComponent implements OnInit {
  @Input() playerId: number;
  @Output() onGoal = new EventEmitter<any>();
  player: any;

  constructor(private playersService: PlayersService) {
    this.player = this.playersService.getMock();
  }

  ngOnInit() {
    this.player = this.playersService.get(this.playerId);
  }

  goal() {
    this.onGoal.emit({'player_id': this.playerId, 'own_goal': false});
  }

  ownGoal() {
    this.onGoal.emit({'player_id': this.playerId, 'own_goal': true});
  }

}
