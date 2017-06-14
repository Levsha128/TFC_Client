import {Player} from "./player";

export class Team {
  constructor(public id: number = null,
              public name: string = '',
              public group: string = '',
              public logo: string = '',
              public firstPlayerId: number = null,
              public secondPlayerId: number = null) {

  }
}
