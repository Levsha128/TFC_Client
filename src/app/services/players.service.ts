import {Injectable} from '@angular/core';
import {Player} from '../models/player';
import {APIService} from './APIService';

@Injectable()
export class PlayersService extends APIService {
  public getFriendsList() {
    const url = `${this.apiRoot}/players/`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Player[];
    });
  }

  public get (id) {
    const url = `${this.apiRoot}/players/${id}`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as Player;
    });
  }
}
