import { Module } from '@nestjs/common';
import { PartiteivaModule } from './partiteiva/partiteiva.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [PartiteivaModule, FilesModule],
})
export class AppModule {}
