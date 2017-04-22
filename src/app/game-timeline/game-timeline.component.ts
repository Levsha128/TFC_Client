import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-timeline',
  templateUrl: './game-timeline.component.html',
  styleUrls: ['./game-timeline.component.css']
})
export class GameTimelineComponent implements OnInit {
  @Input() events;

  constructor() {
  }

  ngOnInit() {
  }

}
