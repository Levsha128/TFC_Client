import { TestBed, inject } from '@angular/core/testing';

import { GameStatsService } from './game-stats.service';

describe('GameStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStatsService]
    });
  });

  it('should ...', inject([GameStatsService], (service: GameStatsService) => {
    expect(service).toBeTruthy();
  }));
});
