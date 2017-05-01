import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../services/games.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {
    game: any = {};

    constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.load(params['id']);
        });
    }

    load(id) {
        this.gamesService
            .get(id)
            .then(res => this.game = res.json(), e => console.log(e));
    }

}
