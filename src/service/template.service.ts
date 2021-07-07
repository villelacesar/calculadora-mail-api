import { Injectable } from '@nestjs/common';
import { MailDto } from '../dto/mail.dto';
import { FileUtil } from '../util/file.util';
import nodeHtmlToImage from 'node-html-to-image';

@Injectable()
export class TemplateService {
  async createImage(htmlTemplate: string, mailDto: MailDto): Promise<any> {
    const htmlBuffer = FileUtil.readTemplateBuffer(htmlTemplate);

    return await nodeHtmlToImage({
      html: htmlBuffer.toString(),
      puppeteerArgs: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      content: {
        ...mailDto,
        headerImg: FileUtil.getBase64Image('banner-greenlog.png'),
        carImg: FileUtil.getBase64Image('car.png'),
        treeImg: FileUtil.getBase64Image('tree.png'),
        dizersimImg: FileUtil.getBase64Image('banner_dizersim.png'),
        footerImg: FileUtil.getBase64Image('banner-footer.png'),
      },
    });
  }
}
