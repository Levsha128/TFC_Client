import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../models/player';

@Component({
  selector: 'app-player-game-controls',
  templateUrl: './player-game-controls.component.html',
  styleUrls: ['./player-game-controls.component.css']
})
export class PlayerGameControlsComponent implements OnInit, OnChanges {
  @Input() playerId: number;
  @Output() onGoal = new EventEmitter<any>();
  private player = new Player();

  constructor(private playersService: PlayersService) {

  }

  ngOnInit(): void {
  }

  goal() {
    this.onGoal.emit({'player_id': this.player.id, 'own_goal': false});
  }

  ownGoal() {
    this.onGoal.emit({'player_id': this.player.id, 'own_goal': true});
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.playersService.get(this.playerId).then((res) => this.player = res, (err) => console.error(err));
  }
}
