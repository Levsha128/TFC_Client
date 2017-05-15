import {Injectable} from '@angular/core';

@Injectable()
export class PlayersService {

  constructor() {
  }

  public getFriendsList() {
    return new Promise<any[]>((resolve) => {
      setTimeout(() => resolve([
        {id: 1, name: 'Player 1'},
        {id: 2, name: 'Player 2'},
        {id: 3, name: 'Player 3'},
        {id: 4, name: 'Player 4'}
      ]), 1000);
    });
  }

  public get(id) {
    return new Promise<any>((resolve) => {
      setTimeout(() => resolve(
        {id: 1, name: 'Player 1'}
      ), 1000);
    });

  }

  public getMock() {
    return {
      id: null,
      name: '',
      avatar: 'player.png'
    };
  }
}
