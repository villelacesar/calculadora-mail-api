import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TemplateService } from './service/template.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    TemplateService
  ]
})
export class AppModule {
}
