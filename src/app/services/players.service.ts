import {Injectable} from '@angular/core';
import {Player} from "../models/player";

@Injectable()
export class PlayersService {

  constructor() {
  }

  public getFriendsList() {
    return new Promise<Player[]>((resolve) => {
      setTimeout(() => resolve([
        new Player(1, 'Player 1'),
        new Player(2, 'Player 2'),
        new Player(3, 'Player 3'),
        new Player(4, 'Player 4')
      ]), 1000);
    });
  }

  public get(id) {
    return new Promise<Player>((resolve) => {
      setTimeout(() => resolve(
        new Player(1, 'Player 1')
      ), 1000);
    });

  }
}
