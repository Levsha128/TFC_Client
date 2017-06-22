import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuGroups = [
    {
      items: [
        {'title': 'Games', 'link': '/games', 'icon': 'list'},
        {'title': 'Friends', 'link': '/friends', 'icon': 'face'},
        {'title': 'Teams', 'link': '/teams', 'icon': 'group'},
        {'title': 'Chat', 'link': '/chats', 'icon': 'chat'},
      ]
    },
    {
      'title': 'Settings',
      items: [
        {'title': 'Settings', 'link': '/settings', 'icon': 'settings'},
        {'title': 'Exit', 'link': '/exit', 'icon': 'clear'},
      ]
    }
  ];
}
