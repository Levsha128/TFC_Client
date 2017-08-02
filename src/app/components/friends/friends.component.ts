import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends = [{name: 'Friend name'}];

  constructor() {
  }

  ngOnInit() {
  }

}
