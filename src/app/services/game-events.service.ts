import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class GameEventsService {
  private apiRoot: string = 'http://192.168.1.100:3000';


  constructor(private http: Http) {
  }

  public getForGame(gameId: number) {
    const url = `${this.apiRoot}/games/${gameId}/events`;
    return this.http.get(url).toPromise().then(response => {
      return response.json().data as GamepadEvent[];
    });
  }

}
