import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

const appRoutes: Routes = [
  {path: 'games', component: GamesComponent/*, canActivate: [LoggedInGuard]*/},
  {path: 'games/:id', component: GameComponent/*, canActivate: [LoggedInGuard]*/},
  {path: '', redirectTo: '/games', pathMatch: 'full'}
];

import { AppComponent } from './app.component';
import { GameResultPostComponent } from './components/game-result-post/game-result-post.component';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { GamesComponent } from './components/games/games.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { GameComponent } from './components/game/game.component';
import { GameTimelineComponent } from './components/game-timeline/game-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    GameResultPostComponent,
    GamesComponent,
    GameComponent,
    GameTimelineComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
