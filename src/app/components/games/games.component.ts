import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.css']
})
export class GamesComponent implements OnInit {
  apiRoot: string = 'http://localhost:3000';
  games: any = [];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.get();
  }

  get() {
    let url = `${this.apiRoot}/games`;
    this.http.get(url).toPromise().then(res => this.games = res.json(), e => console.log(e));
  }
}
