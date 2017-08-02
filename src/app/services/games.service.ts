import {Injectable} from '@angular/core';
import {Game} from '../models/game';
import {APIService} from './APIService';

@Injectable()
export class GamesService extends APIService {
  getGames(): Promise<Game[]> {
    const url = `${this.apiRoot}/games`;
    return this.http.get(url).toPromise().then(response => response.json().data as Game[]);
  }

  get (id: number): Promise<Game> {
    const url = `${this.apiRoot}/games/${id}`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Game;
    });
  }

  create(firstTeamForwardId: number,
         firstTeamGoalkeeperId: number,
         secondTeamForwardId: number,
         secondTeamGoalkeeperId: number): Promise<Game> {
    const url = `${this.apiRoot}/games/`;
    return this.http.post(url, {
      firstTeamForwardId,
      firstTeamGoalkeeperId,
      secondTeamForwardId,
      secondTeamGoalkeeperId
    }).toPromise().then(response => {
      return response.json().data as Game;
    });
  }

  goal(gameId: number, goalmakerId: number, goalkeeperId: number): Promise<any> {
    const url = `${this.apiRoot}/games/${gameId}/goal`;
    return this.http.post(url, {goalmakerId, goalkeeperId}).toPromise().then(response => {
      return response.json().data as Game;
    });
  }
}
