import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-result-post',
  templateUrl: './game-result-post.component.html',
  styleUrls: ['./game-result-post.component.css']
})
export class GameResultPostComponent implements OnInit {
  @Input() id = null;
  @Input() firstTeam = {'name': '', 'group': '', 'logo': 'no-logo.jpg'};
  @Input() secondTeam = {'name': '', 'group': '', 'logo': 'no-logo.jpg'};
  @Input() score = {'firstTeam': 0, 'secondTeam': 0};
  @Input() description = '';

  constructor() {
  }

  ngOnInit() {
  }

}
