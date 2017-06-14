import {GameEvent} from './game-event';

export class Game {
  constructor(public id: number = null,
              public firstTeamId: number = null,
              public secondTeamId: number = null,
              public firstTeamScore: number = 0,
              public secondTeamScore: number = 0,
              public state: GameState = GameState.PENDING) {

  };
}

export enum GameState {
  PENDING = 1,
  ACTIVE = 2,
  FINISHED = 3
}
