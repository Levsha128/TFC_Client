import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../models/player';

@Component({
  selector: 'app-player-game-controls',
  templateUrl: './player-game-controls.component.html',
  styleUrls: ['./player-game-controls.component.css']
})
export class PlayerGameControlsComponent implements OnInit {
  @Input() player: Player;
  @Output() onGoal = new EventEmitter<any>();

  ngOnInit(): void {
  }

  goal() {
    this.onGoal.emit({'player_id': this.player.id, 'own_goal': false});
  }

  ownGoal() {
    this.onGoal.emit({'player_id': this.player.id, 'own_goal': true});
  }

}
