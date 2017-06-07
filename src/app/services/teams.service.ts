import {Injectable} from '@angular/core';
import {Team} from "../models/team";
import {Http} from "@angular/http";

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

}
