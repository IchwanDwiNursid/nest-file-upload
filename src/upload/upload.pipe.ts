import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class UploadPipe implements PipeTransform {
  constructor(
    private readonly mimetypes: string[],
    private readonly maxSize: number,
  ) {}
  transform(value: any) {
    const file: Express.Multer.File = value;

    if (!this.mimetypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `File type ${file.mimetype} is not allowed.`,
      );
    }

    // Memeriksa apakah ukuran file melebihi batas maksimum
    if (file.size > this.maxSize) {
      throw new BadRequestException(
        `File size exceeds the maximum allowed size of ${this.maxSize} bytes.`,
      );
    }

    // Jika lolos semua validasi, kembalikan nilai
    return value;
  }
}
