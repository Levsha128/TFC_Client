import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';

const appRoutes: Routes = [
  {path: 'games', component: GamesComponent/*, canActivate: [LoggedInGuard]*/},
  {path: 'games/new', component: NewGameComponent/*, canActivate: [LoggedInGuard]*/},
  {path: 'games/:id', component: GameComponent/*, canActivate: [LoggedInGuard]*/},
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:id', component: TeamComponent},
  // {path: 'players', component: PlayersComponent},
  // {path: 'players/:id', component: PlayerComponent},
  {path: 'friends', component: FriendsComponent},
  {path: '', redirectTo: '/games', pathMatch: 'full'}
];

import {AppComponent} from './app.component';
import {GameResultPostComponent} from './components/game-result-post/game-result-post.component';
import {Angular2FontAwesomeModule} from 'angular2-font-awesome/angular2-font-awesome';
import {GamesComponent} from './components/games/games.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {GameComponent} from './components/game/game.component';
import {GameTimelineComponent} from './components/game-timeline/game-timeline.component';
import {GamesService} from "./services/games.service";
import {NewGameComponent} from './components/new-game/new-game.component';
import {PlayersService} from "./services/players.service";
import {PlayerGameControlsComponent} from './components/player-game-controls/player-game-controls.component';
import {TeamsService} from "./services/teams.service";
import {GameEventsService} from "./services/game-events.service";
import {GameResultComponent} from './components/game-result/game-result.component';
import {GameStatsService} from './services/game-stats.service';
import {TeamsComponent} from './components/teams/teams.component';
import {TeamComponent} from './components/team/team.component';
import {PlayersComponent} from './components/players/players.component';
import {FriendsComponent} from './components/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    GameResultPostComponent,
    GamesComponent,
    GameComponent,
    GameTimelineComponent,
    NewGameComponent,
    PlayerGameControlsComponent,
    GameResultComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Angular2FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [GamesService, PlayersService, TeamsService, GameEventsService, GameStatsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
