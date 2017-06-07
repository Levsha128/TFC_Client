import {GameEvent} from './game-event';

export class Game {
  constructor(public id: number = null,
              public firstTeamId: number = null,
              public secondTeamId: number = null,
              public eventsId: number[] = [],
              public score: any = {firstTeam: 0, secondTeam: 0}) {

  };
}
