import { Injectable, NotFoundException } from '@nestjs/common';
import { Sport } from './interfaces/sport.interface';
import { createSportDto } from './dto/create-sport.dto';

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

  findOne(id: string) {
    return this.sports.find((sport) => sport.id === Number(id));
  }

  findAll(): Sport[] {
    return this.sports;
  }

  create(sport: createSportDto) {
    this.sports = [...this.sports, sport as Sport];
  }

  update(id: string, sport: Sport) {
    const SportToUpdate = this.sports.find((s) => s.id === +id);
    if (!SportToUpdate) {
      return new NotFoundException(
        "the id you are looking for can't be updated",
      );
    }
    if (sport.Spot) {
      SportToUpdate.Spot = sport.Spot;
    }
    if (sport.coordonnées) {
      SportToUpdate.coordonnées = sport.coordonnées;
    }
    if (sport.Sport) {
      SportToUpdate.Sport = sport.Sport;
    }
    if (sport.hasOwnProperty('Favori')) {
      SportToUpdate.Favori = sport.Favori;
    }
    // recup la valeur du neotableau. pour chaque sport on test si il est diff de l'id original
    // si l'id est =  on garde sinon on remplace par le MAJ
    const updatedSports = this.sports.map((s) =>
      s.id !== +id ? s : SportToUpdate,
    );
    this.sports = [...updatedSports];
    return { updatedSports: 1, sport: updatedSports };
  }
  delete(id: string) {
    const nbSportsBeforeDelete = this.sports.length;
    //on ne garde que les s dont l'id est diff de celui passé en params
    this.sports = [...this.sports.filter((s) => s.id !== +id)];
    if (this.sports.length < nbSportsBeforeDelete) {
      return 'Your sport was deleted successfully';
    } else {
      return 'oops, not successfull';
    }
  }
}
