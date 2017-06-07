import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Game} from "../models/game";
import {Player} from "../models/player";
import {Team} from "../models/team";

@Injectable()
export class GamesService {
  private apiRoot: string = 'http://192.168.1.100:3000';

  constructor(private http: Http) {
  }

  getGames(): Promise<Game[]> {
    const url = `${this.apiRoot}/games`;
    return this.http.get(url).toPromise().then(response => response.json().data as Game[]);
  }

  get(id: number): Promise<Game> {
    const url = `${this.apiRoot}/games/${id}`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Game;
    });
  }

  create(game: Game): Promise<Game> {
    return new Promise<Game>((resolve) => {
      setTimeout(() => resolve(new Game(1, 0, 1)), 1000);
    });
  }

  goal(gameId: number, playerId: number, ownGoal = false): Promise<any> {
    return new Promise<any>((resolve) => {
      setTimeout(() => resolve({}), 1000);
    });

  }
}
