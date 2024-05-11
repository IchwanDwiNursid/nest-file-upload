import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  uploadFile(file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('File not found', 404);
    } else {
      return {
        message: 'File uploaded successfully',
        file: file,
      };
    }
  }
}
