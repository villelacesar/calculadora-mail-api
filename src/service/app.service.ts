import { Injectable } from '@nestjs/common';
import { MailDto } from '../dto/mail.dto';
import { TemplateService } from './template.service';

@Injectable()
export class AppService {
  private static TEMPLATE_CO2 = 'co2e.html';
  private static TEMPLATE_CO2_NAO_VIAVEL = 'co2e-nao-viavel.html';

  constructor(private readonly templateService: TemplateService) {
  }

  async createImageViavel(mailDto: MailDto): Promise<Buffer> {
    return await this.templateService.createImage(
      AppService.TEMPLATE_CO2,
      mailDto,
    );
  }

  async createImageNaoViavel(mailDto: MailDto): Promise<Buffer> {
    return await this.templateService.createImage(
      AppService.TEMPLATE_CO2_NAO_VIAVEL,
      mailDto,
    );
  }
}
