import {Component, OnInit} from '@angular/core';
import {Team} from '../../models/team';
import {TeamsService} from '../../services/teams.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  private team: Team = new Team();
  private stats = [];
  chartsView: any[] = [150, 150];
  chartsColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamsService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.load(params['id']);
    });
  }

  load(id) {
    this.teamService
      .get(id)
      .then(team => this.team = team, err => console.log(err))
      .then(() => this.teamService.getStats(id))
      .then(stats => this.stats = stats);
  }

}
