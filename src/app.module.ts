import { Module } from '@nestjs/common';
import { UploadImageModule } from './upload-image/upload-image.module';

@Module({
  imports: [UploadImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
