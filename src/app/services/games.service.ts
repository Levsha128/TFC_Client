import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GamesService {
  private apiRoot: string = 'http://192.168.1.100:3000';

  constructor(private http: Http) {
  }

  getGames() {
    const url = `${this.apiRoot}/games`;
    return this.http.get(url).toPromise();
  }

  get(id: number) {
    const url = `${this.apiRoot}/games/${id}`;
    return this.http.get(url).toPromise();
  }

  create(firstTeamForward,
         firstTeamGoalkeeper,
         secondTeamForward,
         secondTeamGoalkeeper): Promise<any> {
    return new Promise<any>((resolve) => {
      setTimeout(() => resolve({id: 42, firstTeamForward,
        firstTeamGoalkeeper,
        secondTeamForward,
        secondTeamGoalkeeper}), 1000);
    });
  }

  goal(gameId: number, playerId: number, ownGoal = false) {
    return new Promise<any>((resolve) => {
      setTimeout(() => resolve({}), 1000);
    });

  }
}
