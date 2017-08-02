import {Component, OnInit} from '@angular/core';
import {Team} from '../../models/team';
import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  private teams: Team[] = [];

  constructor(private teamsService: TeamsService) {
  }


  ngOnInit() {
    this.updateTeams();
  }

  private updateTeams() {
    this.teamsService.all().then(teams => this.teams = teams, err => console.log(err));
  }

}
