import {GameEvent} from './game-event';

export class Game {
  constructor(public id: number = null,
              public firstTeamForwardId: number = null,
              public firstTeamGoalkeeperId: number = null,
              public secondTeamForwardId: number = null,
              public secondTeamGoalkeeperId: number = null,
              public firstTeamScore: number = 0,
              public secondTeamScore: number = 0,
              public state: GameState = GameState.PENDING,
              public start: Date = null,
              public end: Date = null) {

  };
}

export enum GameState {
  PENDING = 1,
  ACTIVE = 2,
  FINISHED = 3
}
