import {Injectable} from '@angular/core';
import {Player} from '../models/player';
import {Http} from '@angular/http';

@Injectable()
export class PlayersService {
  private apiRoot: string = 'http://192.168.1.100:3000';

  constructor(private http: Http) {
  }

  public getFriendsList() {
    const url = `${this.apiRoot}/players/`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Player[];
    });
  }

  public get(id) {
    const url = `${this.apiRoot}/players/${id}`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Player;
    });
  }
}
