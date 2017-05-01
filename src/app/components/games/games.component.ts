import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {GamesService} from '../../services/games.service';

@Component({
    selector: 'app-games',
    templateUrl: 'games.component.html',
    styleUrls: ['games.component.css']
})
export class GamesComponent implements OnInit {
    games: any = [];

    constructor(private gamesService: GamesService) {

    }

    ngOnInit() {
        this.load();
    }

    load() {
        this.gamesService
            .getGames()
            .then(res => this.games = res.json(), e => console.log(e));
    }
}
