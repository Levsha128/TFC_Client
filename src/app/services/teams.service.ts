import {Injectable} from '@angular/core';
import {Team} from "../models/team";
import {Http, RequestOptions} from "@angular/http";
import Any = jasmine.Any;

@Injectable()
export class TeamsService {
  private apiRoot: string = 'http://192.168.1.100:3000';

  constructor(private http: Http) {
  }

  get(id: number): Promise<Team> {
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

  getStats(id: number) : Promise<any[]> {
    const url = `${this.apiRoot}/teams/${id}/stats`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as any[];
    });
  }
}
