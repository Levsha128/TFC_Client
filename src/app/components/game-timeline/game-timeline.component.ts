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

  getIcon(event) {
    switch (event.type) {
      case 'goal':
        return 'soccer-ball-o';
      case 'start':
        return 'play-circle';
      case 'stop':
        return 'stop-circle';
      default:
        return 'circle';
    }
  }

}
