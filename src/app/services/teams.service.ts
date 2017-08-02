import {Injectable} from '@angular/core';
import {Team} from '../models/team';
import {APIService} from './APIService';

@Injectable()
export class TeamsService extends APIService {
  get (id: number): Promise<Team> {
    const url = `${this.apiRoot}/teams/${id}`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Team;
    });
  }

  findByPlayers(forwardId, goalkeeperId): Promise<Team> {
    const url = `${this.apiRoot}/teams/findByPlayers`;
    return this.http.get(url, {search: `forwardId=${forwardId}&goalkeeperId=${goalkeeperId}`}).toPromise().then(response => {
      return response.json().data as Team;
    });
  }

  all(): Promise<Team[]> {
    const url = `${this.apiRoot}/teams/`;
    return this.http.get(url, {}).toPromise().then(response => {
      return response.json().data as Team[];
    });
  }

  getStats(id: number): Promise<any[]> {
    const url = `${this.apiRoot}/teams/${id}/stats`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as any[];
    });
  }
}
