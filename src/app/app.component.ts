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
        {'title': 'Games', 'link': '/games', 'icon': 'group'},
        {'title': 'Friends', 'link': '/friends', 'icon': 'face'},
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
