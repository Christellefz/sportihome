import { Injectable } from '@nestjs/common';
import { Sport } from './interfaces/sport.interface';

@Injectable()
export class SportsService {
  sports = [
    {
      id: 1,
      Spot: 'Mon super spot1',
      coordonnées: [43.60451, 3.902116],
      Sport: 'Velo',
      Favori: true,
    },
    {
      id: 2,
      Spot: 'Mon super spot2',
      coordonnées: [43.522663, 3.922588],
      Sport: 'Kite',
      Favori: false,
    },
    {
      id: 3,
      Spot: 'Mon super spot3',
      coordonnées: [43.556386, 3.927683],
      Sport: 'Yoga',
      Favori: true,
    },
  ];

  findAll(): Sport[] {
    return this.sports;
  }

  create(sport: Sport) {
    this.sports = [...this.sports, sport];
  }
}
