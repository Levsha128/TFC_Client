export class GameEvent {
  static readonly TEAM_FIRST = false;
  static readonly TEAM_SECOND = true;
  constructor(public id: number = null,
              public type: string = null,
              public title: string = null,
              public time: string = null,
              public firstTeam: boolean = GameEvent.TEAM_FIRST,
              public description: string = null) {

  }
}
