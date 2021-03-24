import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { SportsService } from './sports.service';
import { createSportDto } from './dto/create-sport.dto';

//localhost:3000/sports
@Controller('sports')
export class SportsController {
  //le constructor fourni une instance  de sport service (accesseur, nomdeVariable:instance)
  constructor(private readonly sportsService: SportsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportsService.findOne(id);
  }

  @Get()
  findAll(): any[] {
    return this.sportsService.findAll();
  }

  @Post()
  createSport(@Body() newSport: createSportDto) {
    this.sportsService.create(newSport);
  }
  @Patch(':id')
  updateSport(@Param('id') id: string, @Body() sport: createSportDto) {
    return this.sportsService.update(id, sport);
  }
  @Delete(':id')
  deleteSport(@Param('id') id: string) {
    return this.sportsService.delete(id);
  }
}
