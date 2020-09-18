import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PartiteivaService } from './partiteiva.service'
import { Partitaiva } from './partitaiva.model';

@Controller('partiteiva')
export class PartiteivaController {
   constructor(private partiteivaService: PartiteivaService) {}

   @Get()
   getNothing() {
      return { 'error' : 'GET enpoint not allowed' };
   }

   @Get('/:number')
   getPivaByNumber(@Param('number') number: string): Partitaiva {
      return this.partiteivaService.getPivaByNumber(number)
   }

   @Post()
   insertPartitaiva(@Body() body) {
      if (typeof body[0] === 'object')
         return body.map(o => this.partiteivaService.createPartitaiva(o))
      return this.partiteivaService.createPartitaiva(body)
   }
}