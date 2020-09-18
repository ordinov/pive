import { Module } from '@nestjs/common';
import { PartiteivaController } from './partiteiva.controller';
import { PartiteivaService } from './partiteiva.service';

@Module({
  controllers: [PartiteivaController],
  providers: [PartiteivaService]
})
export class PartiteivaModule {}
