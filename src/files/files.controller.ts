import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service'

@Controller('files')
export class FilesController {
   constructor(private filesService: FilesService) {}

   @Post()
   @UseInterceptors(FileInterceptor('file'))
   fileSubmitted(@UploadedFile() file) {
      return this.filesService.parseFile(file)
   }
      
}
