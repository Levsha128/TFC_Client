import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-game-timeline',
    templateUrl: 'game-timeline.component.html',
    styleUrls: ['game-timeline.component.css']
})
export class GameTimelineComponent implements OnInit {
    @Input() events;
    @Input() firstTeam = {'name': '', 'group': '', 'logo': 'no-logo.jpg'};
    @Input() secondTeam = {'name': '', 'group': '', 'logo': 'no-logo.jpg'};

    constructor() {
    }

    ngOnInit() {
    }

}
