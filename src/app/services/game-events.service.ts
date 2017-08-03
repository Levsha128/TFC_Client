import {Injectable} from '@angular/core';
import {APIService} from './APIService';
import {GameEvent} from '../models/game-event';

@Injectable()
export class GameEventsService extends APIService {
  public getForGame(gameId: number) {
    const url = `${this.apiRoot}/games/${gameId}/events`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as GameEvent[];
    });
  }
}
