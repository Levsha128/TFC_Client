import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {GameStats} from '../models/game-stats';

@Injectable()
export class GameStatsService {
  private apiRoot: string = 'http://192.168.1.100:3000';


  constructor(private http: Http) {
  }

  public getForGame(gameId: number) {
    const url = `${this.apiRoot}/games/${gameId}/stats`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as GameStats[];
    });
  }
}
