import {Player} from './player';
import {GameEvent} from './game-event';
import {Team} from './team';
export class Game {
  constructor(public id: number = null,
              public firstTeam: Team = new Team(),
              public secondTeam: Team = new Team(),
              public events: GameEvent[] = []) {

  };
}
