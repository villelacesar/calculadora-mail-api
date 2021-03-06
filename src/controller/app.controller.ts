import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../service/app.service';
import { MailDto } from '../dto/mail.dto';
import { Readable } from 'stream';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post('create-image/viavel')
  async createImageViavel(@Body() mailDto: MailDto, @Res() res: Response) {
    const buffer: Buffer = await this.appService.createImageViavel(mailDto);
    const stream = this.getReadableStream(buffer);

    res.set({
      'Content-Type': 'image/png',
      'Content-Length': buffer.length,
    });

    stream.pipe(res);
  }

  @Post('create-image/nao-viavel')
  async createImageNaoViavel(@Body() mailDto: MailDto, @Res() res: Response) {
    const buffer: Buffer = await this.appService.createImageNaoViavel(mailDto);
    const stream = this.getReadableStream(buffer);

    res.set({
      'Content-Type': 'image/png',
      'Content-Length': buffer.length,
    });

    stream.pipe(res);
  }

  getReadableStream(buffer: Buffer): Readable {
    const stream = new Readable();

    stream.push(buffer);
    stream.push(null);

    return stream;
  }
}
