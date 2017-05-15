export class GameEvent {
  constructor(public id: number = null,
              public type: string = null,
              public title: string = null,
              public time: string = null,
              public firstTeam: boolean = true,
              public description: string = null) {

  }
}
