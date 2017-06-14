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
  @Input() ownGoalkeeperId: number;
  @Input() enemyGoalkeeperId: number;
  @Output() onGoal = new EventEmitter<any>();
  private player = new Player();

  constructor(private playersService: PlayersService) {

  }

  ngOnInit(): void {
  }

  goal() {
    this.onGoal.emit({'goalmakerId': this.playerId, 'goalkeeperId': this.enemyGoalkeeperId});
  }

  ownGoal() {
    this.onGoal.emit({'goalmakerId': this.playerId, 'goalkeeperId': this.ownGoalkeeperId});
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.playersService.get(this.playerId).then((res) => this.player = res, (err) => console.error(err));
  }
}
