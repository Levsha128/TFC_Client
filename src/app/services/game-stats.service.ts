import {Injectable} from '@angular/core';
import {GameStats} from '../models/game-stats';
import {APIService} from './APIService';

@Injectable()
export class GameStatsService extends APIService {
  public getForGame(gameId: number) {
    const url = `${this.apiRoot}/games/${gameId}/stats`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as GameStats[];
    });
  }
}
