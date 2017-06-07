import {Player} from "./player";

export class Team {
  constructor(public id: number = null,
              public name: string = '',
              public group: string = '',
              public logo: string = '',
              public forward: number = null,
              public goalkeeper: number = null) {

  }
}
