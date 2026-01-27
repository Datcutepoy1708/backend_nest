import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus, BadRequestException, UseFilters } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { HttpExceptionFilter } from 'src/core/http-exception.filter';

@Controller('files')
export class FilesController {
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'text/plain',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  private readonly maxFileSize = 1024 * 1024; // 1MB

  constructor(private readonly filesService: FilesService) { }

  @Public()
  @Post('upload')
  @ResponseMessage("Upload Single File")
  @UseInterceptors(FileInterceptor('fileUpload'))
  @UseFilters(new HttpExceptionFilter())
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Validate file
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `File type not allowed. Allowed types: ${this.allowedMimeTypes.join(', ')}`
      );
    }

    if (file.size > this.maxFileSize) {
      throw new BadRequestException(
        `File size too large. Max size: ${this.maxFileSize / 1024 / 1024}MB`
      );
    }

    return {
      fileName: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimeType: file.mimetype
    };
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}