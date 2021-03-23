import { Body, Controller, Get, Post } from '@nestjs/common';
import { SportsService } from './sports.service';

//localhost:3000/sports
@Controller('sports')
export class SportsController {
  //le constructor fourni une instance  de sport service (accesseur, nomdeVariable:instance)
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  findAll(): any[] {
    return this.sportsService.findAll();
  }

  @Post()
  createSport(@Body() newSport) {
    this.sportsService.create(newSport);
  }
}
